import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import { ContentData } from "../types";
import { GET_PODCAST_CARDS } from "./queries";

export const retrievePodcastData = async (
  client: ApolloClient<NormalizedCacheObject>,
  keywords: string,
  limit: number,
  offset: number
): Promise<ContentData> => {
  try {
    const result: ApolloQueryResult<ContentData> = await client.query({
      query: GET_PODCAST_CARDS,
      variables: {
        keywords,
        limit,
        offset,
      },
    });
    return result.data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return {
      contentCards: {
        edges: [],
      },
    };
  }
};
