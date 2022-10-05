const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  products: [Product]
  dairy: [Dairy]
  meats: [Meat]
  starch: [Starch]
  packagedGoods: [Goods]
}

type Product {
  _id: ID
  name: String
  price: Float
  category: String
  description: String
}

type Dairy {
  _id: ID
  dairyName: String
  dairyDescription: String
}

type Meat {
  _id: ID
  MeatName: String
  MeatDescription: String
}

type Starch{
  _id: ID
  starchName: String
  starchDescription: String
}

type Goods{
  _id: ID
  GoodsName: String
  GoodsDescription: String
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
