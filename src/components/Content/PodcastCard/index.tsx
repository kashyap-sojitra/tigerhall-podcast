import React from "react";
import {
  Box,
  Image,
  Text,
  Card,
  Tag,
  Heading,
  Stack,
  CardBody,
  Progress,
  CardFooter,
  ButtonGroup,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import {
  getCategories,
  getCompanyNames,
  getTimeLabel,
  getUserNames,
} from "../../../utils/helper";
import { Podcast } from "../../../types";

interface PodcastCardProps {
  podcast: Podcast;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ podcast }) => {
  return (
    <Box>
      <Card padding={0} borderRadius="8px" height="272px" width="244px">
        <Box position="relative">
          <Tag
            position="absolute"
            gap={1}
            borderRadius={0}
            borderTopLeftRadius="8px"
            borderBottomRightRadius="8px"
            zIndex="1"
            color="grey.900"
          >
            <Image mr={1} h="12px" w="12px" src="/icons/Vector.svg" />
            <Text fontSize={"12px"} fontWeight="700" lineHeight="14.4px">
              30% Completed
            </Text>
          </Tag>
          <Tag
            position="absolute"
            bottom="8px"
            right="8px"
            bg="rgba(0, 0, 0, 0.5)"
            padding="2"
            borderRadius="100px"
            color="white"
            size="sm"
            zIndex="1"
            fontSize="12px"
            fontWeight="700"
            lineHeight="14.4px"
          >
            <TagLeftIcon boxSize="12px" as={TimeIcon} />
            <TagLabel>{getTimeLabel(podcast.length)}</TagLabel>
          </Tag>

          <Image
            src={podcast.image.uri}
            width="100%"
            height="120px"
            borderRadius="8px"
            borderBottomRadius="0px"
          />
          <Image
            src="/icons/headphone.svg"
            position="absolute"
            h="24px"
            w="24px"
            bottom="8px"
            left="8px"
            zIndex="2"
          />
          <Progress value={30} size="xs" colorScheme="tigerOrange" />
        </Box>
        <CardBody padding={0} flex="initial" minHeight="calc(100% - 164px)">
          <Box
            padding={"8px 8px 12px 8px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            gap={"8px"}
            height={"100%"}
          >
            <Stack gap={1}>
              <Heading
                fontSize="12px"
                color={"grey.700"}
                fontWeight={500}
                lineHeight={"14.4px"}
              >
                {getCategories(podcast.categories)}
              </Heading>
              <Text
                fontSize="16px"
                fontWeight="700"
                lineHeight="19.2px"
                color="black"
              >
                {podcast.name}
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text
                fontSize="12px"
                fontWeight="500"
                lineHeight="14.4px"
                color="darkgrey.300"
              >
                {getUserNames(podcast.experts)}
              </Text>
              <Text
                fontSize="12px"
                fontWeight="700"
                lineHeight="14.4px"
                color="#979797"
              >
                {getCompanyNames(podcast.experts)}
              </Text>
            </Stack>
          </Box>
        </CardBody>
        <CardFooter padding={[2, 2]} display="flex" justifyContent="flex-end">
          <ButtonGroup spacing="2">
            <Image src="/icons/Share.svg" alt="Logo" mr={2} />
            <Image src="/icons/Bookmark.svg" alt="Logo" mr={2} />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default PodcastCard;
