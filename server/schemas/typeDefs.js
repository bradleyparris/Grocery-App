const { gql } = require('apollo-server-express');

//TYPE Query is used for the resolvers to make the GET requests
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  cart: [Cart]
  
}



type Cart {
  _id: ID
  cartname: String
  // produces: [Produce]
  // dairy: [Dairy]
  meats: [Meat]
  goods: [Goods]
  starch: [Starch]
  produceCount: Int
  
}

type Auth {
  token: ID!
  user: User
}

// type Produce {
//   _id: ID
//   produceName: String
//   price: Float
//   produceDescription: String
//   quantity: Int
// }

// type Dairy {
//   _id: ID
//   dairyName: String
//   price: Float
//   dairyDescription: String
//   quantity: Int
// }

type Meat {
  _id: ID
  meatName: String
  meatDescription: String
  price: Float
  quantity: Int
}

type Starch{
  _id: ID
  starchName: String
  starchDescription: String
  price: Float
  quantity: Int
}

type Goods{
  _id: ID
  GoodsName: String
  GoodsDescription: String
  price: Float
  quantity: Int
}

  type Query {
    me: User
    carts: [Cart]
    cartbyId(_id: ID!): Cart
    users: [User]
    user(_id: ID!): User
    produces: [Produce]
    produce(_id: ID!): Produce
    
  

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCart(userId: ID!, cartname: String!): Cart
    addproducetoCart(cartId: ID!, produceName: String!, price: Float!, produceDescription: String!, quantity: Int!): Cart
    adddairytoCart(cartId: ID!, dairyName: String!, price: Float!, quantity: Int!, dairyDescription: String! ): Cart
    addmeattoCart(cartId: ID!, meatName: String!, price: Float!, quantity: Int!, meatDescription: String! ): Cart
    addgoodstoCart(cartId: ID!, GoodsName: String!, price: Float!, quantity: Int!, GoodsDescription: String! ): Cart
    addstarchtoCart(cartId: ID!, starchName: String!, price: Float!, quantity: Int!, starchDescription: String! ): Cart
    deletecart(_id: ID!): String!


}
`;

module.exports = typeDefs;
