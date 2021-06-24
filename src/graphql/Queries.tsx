import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
  query {
    continents {
      name
      code
    }
  }
`;

export const GET_CONTINENT = gql`
  query continent($code: String!) {
    continent(code: $code) {
      name
      countries {
        name
        emoji
        languages {
          name
        }
      }
    }
  }
`;
