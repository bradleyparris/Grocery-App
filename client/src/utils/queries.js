import { gql } from '@apollo/client';

export const QUERY_PRODUCE = gql`
    query Query{
        produces{
            _id,
            produceName,
            produceDescription
        }
    }
`;