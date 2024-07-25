import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Img,
  Skeleton,
  useBreakpointValue,
} from "@chakra-ui/react";
import PodcastItem from "../Content/PodcastCard";
import { useCallback, useEffect, useRef, useState } from "react";
import { retrievePodcastData } from "../../podcast/services";
import { Podcast } from "../../types";
import { convertImageURI } from "../../utils/helper";
import client from "../../apollo/client";

interface ContentProps {
  searchKey: string;
}

const Content = ({ searchKey }: ContentProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [podcastData, setPodcastData] = useState<Podcast[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [oldSearchKey, setOldSearchKey] = useState<string>("");
  const skeletonArray = [0, 1, 2, 3, 4];

  const observer = useRef<IntersectionObserver | null>(null);
  const columnCount = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 5,
  });

  const processPodcastData = (data: Podcast[]): Podcast[] => {
    return data.map((podcast) => ({
      ...podcast,
      image: {
        ...podcast.image,
        uri: convertImageURI(podcast.image.uri, 244, 120),
      },
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const isSearchKeyUpdated = oldSearchKey !== searchKey;
        const limit = 5;
        const data = await retrievePodcastData(
          client,
          searchKey,
          limit,
          isSearchKeyUpdated ? 0 : offset
        );
        const transformedData: Podcast[] = processPodcastData(
          data.contentCards.edges
        );

        if (offset === 0 || isSearchKeyUpdated) {
          setPodcastData(transformedData);
        } else {
          setPodcastData((prevData) => [...prevData, ...transformedData]);
        }

        setHasMore(transformedData.length === limit);
      } catch (error) {
        setError(true);
      } finally {
        setOldSearchKey(searchKey);
        setLoading(false);
      }
    };

    fetchData();
  }, [offset, oldSearchKey, searchKey]);

  const lastPodcastRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore || !node) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset(podcastData.length);
        }
      });

      observer.current.observe(node);
    },
    [loading, hasMore, podcastData]
  );

  return (
    <Flex
      direction="column"
      maxW="100%"
      h="calc(100vh - 64px)"
      mx="auto"
      pt="64px"
      pl={{ md: "62px", sm: "40px" }}
      pr={{ md: "62px", sm: "40px" }}
      bg="darkgrey.800"
    >
      <Box pb={30} mb={4}>
        <Heading
          as="h2"
          size="lg"
          color="white"
          fontSize="24px"
          fontWeight="700"
          textAlign={{ base: "center", md: "left" }}
          pl={{ base: "0", md: "20px", sm: "0", lg: "6", xl: "3" }}
        >
          Tigerhall Library
        </Heading>
      </Box>
      {loading && offset === 0 && (
        <Flex justify="center" align="center" height="100%">
          <Img src="../../../public/icons/loading.gif"></Img>
        </Flex>
      )}
      {podcastData.length > 0 ? (
        <Grid
          templateColumns={`repeat(${columnCount}, 1fr)`}
          gap="24px"
          overflowY="auto"
          pb="60px"
          width="100%"
          sx={{
            "&::-webkit-scrollbar": {
              width: "0px",
              height: "0px",
            },
            scrollbarWidth: "none" /* For Firefox */,
            msOverflowStyle: "none" /* For Internet Explorer and Edge */,
          }}
        >
          {podcastData.map((item, index) => (
            <GridItem
              key={index}
              colSpan={1}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <PodcastItem key={index} podcast={item} />
              {index === podcastData.length - 1 && <div ref={lastPodcastRef} />}
            </GridItem>
          ))}
          {hasMore &&
            loading &&
            skeletonArray.map((_item, index) => (
              <GridItem
                key={index}
                colSpan={1}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Card
                  padding={0}
                  height="272px"
                  width={"244px"}
                  borderRadius="8px"
                >
                  <Skeleton
                    height="120px"
                    borderRadius={0}
                    borderTopLeftRadius="8px"
                    borderTopRightRadius="8px"
                  />
                  <Flex
                    direction="column"
                    gap="15px"
                    marginTop="10px"
                    marginLeft="16px"
                    padding="5px"
                  >
                    {skeletonArray.map(
                      (_itemInside, insideIndex) =>
                        insideIndex !== 4 && (
                          <Skeleton
                            key={insideIndex}
                            height="10px"
                            width="85%"
                          ></Skeleton>
                        )
                    )}
                  </Flex>
                  <Flex direction="column" mt="20px" justifyContent="flex-end">
                    <Flex
                      direction="row"
                      justifyContent="flex-end"
                      width="100%"
                      padding="10px"
                    >
                      <Skeleton height="10px" width="20%"></Skeleton>
                    </Flex>
                  </Flex>
                </Card>
              </GridItem>
            ))}
        </Grid>
      ) : (
        podcastData.length === 0 &&
        !loading && (
          <Heading
            as="h3"
            size="md"
            color="white"
            fontSize="20px"
            fontWeight="500"
            textAlign="center"
          >
            No content found
          </Heading>
        )
      )}
      {error && podcastData.length !== 0 && (
        <Heading
          as="h3"
          size="md"
          color="red"
          fontSize="20px"
          fontWeight="500"
          textAlign="center"
        >
          Uh Oh! Something went wrong
        </Heading>
      )}
    </Flex>
  );
};

export default Content;
