import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import PodcastCard from "../Content/PodcastCard";
import { useEffect, useState } from "react";
import { Podcast } from "../../types";

interface ContentProps {
  searchKey: string;
}

const Content = ({ searchKey }: ContentProps) => {
  console.log(searchKey);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [podcastData, setPodcastData] = useState<Podcast[]>([]);

  const columnCount = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 5,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        setPodcastData([
          {
            name: "audio Teresa",
            length: 70,
            image: {
              uri: "https://images.staging.tigerhall.io/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
            },
            categories: [
              {
                name: "category April",
              },
            ],
            experts: [
              {
                firstName: "Lorine",
                lastName: "Walsh",
                title: "",
                company: "",
              },
            ],
          },
          {
            name: "summarized podcast test",
            length: 869,
            image: {
              uri: "https://images.staging.tigerhall.io/users/2023-07-26/5a4dd479-8f14-47ee-a546-2b7aee2e0a35-2699aba9-f71c-4310-a204-995d3bb7af2e.jpeg",
            },
            categories: [
              {
                name: "category Gertrude",
              },
            ],
            experts: [
              {
                firstName: "Lorine",
                lastName: "Walsh",
                title: "",
                company: "",
              },
            ],
          },
          {
            name: "audio Vincent",
            length: 1337,
            image: {
              uri: "https://images.staging.tigerhall.io/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
            },
            categories: [
              {
                name: "category Enola",
              },
              {
                name: "category Ila",
              },
              {
                name: "category Loyal",
              },
            ],
            experts: [
              {
                firstName: "Reilly",
                lastName: "Brakus",
                title:
                  "test test long text asdfasdfasdf asdf asdf as dfa sdf asdf asd fas fd asd fa s",
                company: "sdfads asd fasd f asd f asdf as df as fas dfa sdf ",
              },
            ],
          },
          {
            name: "audio Mauricio",
            length: 1337,
            image: {
              uri: "https://images.staging.tigerhall.io/2023-06-01/52b0c98e-7b3d-42c7-ae41-902df14c3f76.png",
            },
            categories: [
              {
                name: "category Enola",
              },
              {
                name: "category Kailey",
              },
              {
                name: "category Loyal",
              },
            ],
            experts: [
              {
                firstName: "Chadd",
                lastName: "Waelchi",
                title: "",
                company: "",
              },
            ],
          },
          {
            name: "test 12344",
            length: 6,
            image: {
              uri: "https://images.staging.tigerhall.io/users/2023-09-13/7f7ec0b5-c32c-4f70-89ed-c7f80925c449-460114c6-a8d7-498c-8541-567e82bc4069.png",
            },
            categories: [
              {
                name: "category Enola",
              },
              {
                name: "category Ila",
              },
            ],
            experts: [
              {
                firstName: "expert",
                lastName: "new",
                title: "",
                company: "",
              },
            ],
          },
        ]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {loading && (
        <Flex justify="center" align="center" height="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#FF5900"
            size="xl"
          />
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
              <PodcastCard key={index} podcast={item} />
            </GridItem>
          ))}
        </Grid>
      ) : (
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
