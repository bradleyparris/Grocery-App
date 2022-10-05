 const { AuthenticationError } = require('apollo-server-express');
 const { signToken } = require('../utils/auth');
const {User, Produce, Cart} = require('../models');

const resolvers = {

  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    //Get all carts
    cart: async() => {
      return Cart.find()
      .populate('produces')
      .populate('dairy')
      .populate('meats')
      .populate('goods')
      .populate('starch');
    },
//Get cart by Id
    cartbyId: async (parent, {_id}) => {
      return Cart.findOne({_id})
      .populate('produces')
      .populate('dairy')
      .populate('meats')
      .populate('goods')
      .populate('starch');
    },
    //GET all users
    users: async () => {
      return User.find()
      .select('-__v');
    },
    //GET user by Id
    user: async (parent, {_id}) => {
      return User.findOne({_id})
      .select('-__v -password');
    }
    // //GET all Produces
    // produces: async () => {
    //   return Produce.find();
    // },
    // //GET produce by id
    // produce: async (parent, {_id}) => {
    //   return Produce.findOne({_id});
    // },

    //GET all dairy products
    

  },

  Mutation: {

  addCart: async (parent, {userId, cartname}, context) => {
    if (!context.user) {
      const cart = await Cart.create({cartname});
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { cart: { cartname}[0]} },
        { new: true, runValidators: true }
      );
  
      return {cart, updatedUser};
    }
  
    // throw new AuthenticationError('You need to be logged in!');
  },
//Similar principle as adding Products to user
    addproducetoCart: async (parent, {cartId, produceName, price, produceDescription, quantity}, context) => {
      if (context.user) {

        const updatedCart = await Cart.findOneAndUpdate(
          { _id: cartId },
          { $push: { produces: { produceName, price, produceDescription, quantity} } },
          { new: true, runValidators: true }
        );
    
        return updatedCart;
      }
    
       throw new AuthenticationError('You need to be logged in!');
    },
    adddairytoCart: async (parent, {cartId, dairyName, price, quantity, dairyDescription}, context) => {
      if (!context.user) {

        const updatedCart = await Cart.findOneAndUpdate(
          { _id: cartId },
          { $push: { dairy: { dairyName, price, quantity, dairyDescription} } },
          { new: true, runValidators: true }
        );
    
        return updatedCart;
      }
    
      // throw new AuthenticationError('You need to be logged in!');
    },

    addmeattoCart: async (parent, {cartId, meatName, price, quantity, meatDescription}, context) => {
      if (!context.user) {

        const updatedCart = await Cart.findOneAndUpdate(
          { _id: cartId },
          { $push: { meats: { meatName, price, quantity, meatDescription} } },
          { new: true, runValidators: true }
        );
    
        return updatedCart;
      }
    
      // throw new AuthenticationError('You need to be logged in!');
    },

    addgoodstoCart: async (parent, {cartId, GoodsName, price, quantity, GoodsDescription}, context) => {
      if (!context.user) {

        const updatedCart = await Cart.findOneAndUpdate(
          { _id: cartId },
          { $push: { goods: { GoodsName, price, quantity, GoodsDescription} } },
          { new: true, runValidators: true }
        );
    
        return updatedCart;
      }
    
      // throw new AuthenticationError('You need to be logged in!');
    },

    addstarchtoCart: async (parent, {cartId, starchName, price, quantity, starchDescription}, context) => {
      if (!context.user) {

        const updatedCart = await Cart.findOneAndUpdate(
          { _id: cartId },
          { $push: { starch: { starchName, price, quantity, starchDescription} } },
          { new: true, runValidators: true }
        );
    
        return updatedCart;
      }
    
      // throw new AuthenticationError('You need to be logged in!');
    },
//WORK ON DELETING CART
    // deletecart: async(parent, _id) => {
    //   Cart.findByIdAndDelete(_id._id);
    //   return "Cart has been deleted";
    // },
    // addProduct: async (parent, args) => {
    //   const product = await Cart.create({ ...args, itemName: context.user.userName});
    //   const produce = await Produce.create({ ...args, consumer: context.user.userName });
    //   const user = await User.findOne({email});

    //   if(!user) {
    //     Cart.create(
    //       { $push: { itemName: produce.produceName}},
    //       { new: true }
    //     );
    //   }
    //   await Cart.findByIdAndUpdate(
    //     { _id: _id },
    //     { $push: { produces: produce._id } },
    //     { new: true }
    //   );
  
    //   return produce;
    // },
    //Have a signed token with users data
    //CREATE a user with args(object of the values passed into a query/mutation request as parameters)
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return {token, user};
    },
    //Authenticate login by checking to see if email and password are correct
    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if(!user) {
          throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return {token, user};
    },
}

};

module.exports = resolvers;

// export const Query = (productName) => {
//  return( gql`
//   query Query{
//     ` + productName + `{
//       _id,
//       ` + productName + `Name,
//       ` + productName + `Description
//     }     
//   }
//   `)
// } 


// export const Query = (cartbyId) =?

//use this function instead of QUERY_PRODUCE
//then it should work with your category field if you pass this in
