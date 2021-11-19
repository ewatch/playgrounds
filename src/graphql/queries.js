/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlayground = /* GraphQL */ `
  query GetPlayground($id: ID!) {
    getPlayground(id: $id) {
      id
      name
      location {
        longitude
        latitude
        city
        street
        zip
      }
      equipment {
        name
        equipmentType
      }
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listPlaygrounds = /* GraphQL */ `
  query ListPlaygrounds(
    $filter: ModelPlaygroundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaygrounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location {
          longitude
          latitude
          city
          street
          zip
        }
        equipment {
          name
          equipmentType
        }
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
