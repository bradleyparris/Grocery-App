const { gql } = require('apollo-server-express');


const typeDefs = gql`
type User {
  _id: ID
  userName: String
  email: String
  password: String
  produces: [Produce]
  dairy: [Dairy]
  meats: [Meat]
  starch: [Starch]
  packagedGoods: [Goods]
}

type Produce {
  _id: ID
  produceName: String
  produceDescription: String
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
    produces: [Produce]
    produce(_id: ID!): Produce

  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addProduct(produceName: String!, consumer: String, produceDescription: String!, category: String!): Produce
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
