import { gql } from "@apollo/client";

export const GET_ALL_FRUIT = gql`
    query allFruit {
        getAllFruit {
            name
            family
            nutritions {
            fat
            }
        }
    }
`