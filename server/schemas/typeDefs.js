const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
}

type Product {
  _id: ID
  name: String
  price: Float
  category: String
  description: String
}

  type Query {
    users: [User]
    user(_id: ID!): User
    products: [Product]
    product(_id: ID!): Product

  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(name: String!, consumer: String, description: String!, category: String!): Product
  }
  type Auth {
    token: ID!
    user: User
  }
`;
// const typeDefs = gql`
//   type User {
//     _id: ID
//     username: String
//     email: String
//   }

  

//   type Query {
//     me: User
//     users: [User]
//     user(username: String!): User
//   }

//   type Mutation {
//     login(email: String!, password: String!): Auth
//     addUser(username: String!, email: String!, password: String!): Auth
//   }
// `;

module.exports = typeDefs;
