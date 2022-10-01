const { gql } = require('apollo-server-express');

//TYPE Query is used for the resolvers to make the GET requests
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

type Auth {
  token: ID!
  user: User
}

type Produce {
  _id: ID
  produceName: String
  consumer: String
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
    me: User
    users: [User]
    user(_id: ID!): User
    produces: [Produce]
    produce(_id: ID!): Produce
  

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addProduce(produceName: String!, consumer: String, produceDescription: String!): Produce
}
`;

module.exports = typeDefs;
