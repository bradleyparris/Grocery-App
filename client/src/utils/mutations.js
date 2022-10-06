import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
            _id
            username
            password
            }
        }
    }
`;

export const ADD_CARTITEM = gql`
    mutation addCartItem($id: ID!, $name: String!, $price: Float!, $category: String!) {
        addCartItem(_id: $id, name: $name, price: $price, category: $category){
            _id
            name
            price
            category
        }
    }
`;