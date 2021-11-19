/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayground = /* GraphQL */ `
  mutation CreatePlayground(
    $input: CreatePlaygroundInput!
    $condition: ModelPlaygroundConditionInput
  ) {
    createPlayground(input: $input, condition: $condition) {
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
export const updatePlayground = /* GraphQL */ `
  mutation UpdatePlayground(
    $input: UpdatePlaygroundInput!
    $condition: ModelPlaygroundConditionInput
  ) {
    updatePlayground(input: $input, condition: $condition) {
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
export const deletePlayground = /* GraphQL */ `
  mutation DeletePlayground(
    $input: DeletePlaygroundInput!
    $condition: ModelPlaygroundConditionInput
  ) {
    deletePlayground(input: $input, condition: $condition) {
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
