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
`;
// const typeDefs = gql`
//   type User {
//     _id: ID
//     username: String
//     email: String
//   }

//   type Auth {
//     token: ID!
//     user: User
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
