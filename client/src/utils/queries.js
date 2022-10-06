import { gql } from '@apollo/client';

export const QUERY_PRODUCT = gql`
    query Query{
        products {
            _id,
            name,
            price,
            category,
            description
        }
    }
`;