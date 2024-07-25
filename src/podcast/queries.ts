import { gql } from "@apollo/client";

export const GET_PODCAST_CARDS = gql`
  query GetPodcastCards($keywords: String!, $limit: Int!, $offset: Int!) {
    contentCards(
      filter: {
        limit: $limit
        offset: $offset
        keywords: $keywords
        types: [PODCAST]
      }
    ) {
      edges {
        ... on Podcast {
          ...PodcastDetails
          image {
            ...ImageDetails
          }
          categories {
            ...CategoryDetails
          }
          experts {
            ...ExpertDetails
          }
        }
      }
    }
  }

  fragment PodcastDetails on Podcast {
    name
    length
  }

  fragment ImageDetails on Image {
    uri
  }

  fragment CategoryDetails on Category {
    name
  }

  fragment ExpertDetails on Expert {
    firstName
    lastName
    title
    company
  }
`;
