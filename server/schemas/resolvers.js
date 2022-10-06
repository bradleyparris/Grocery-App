const { AuthenticationError } = require('apollo-server-express');
// const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const {User, Product, Cart} = require('../models');
const { populate } = require('../models/User');


const resolvers = {

  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('cartItems');
    },

    products: async () => {
      return Product.find();
    },
    queryCartItems: async (parent, { _id }) => {
      const user = await User.findOne({ _id });
      return user.cartItems;
    }
  },
  Mutation: {
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

    addCartItem: async (parent, args, context) => {
      if (context.user) {
        const { _id, name, price, category} = args;
        const product = await Product.findById({ _id, consumer: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { cartItems: {
            _id: _id,
            name: name,
            price: price,
            category: category } } },
          { new: true }
        );

        return product;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // updateUser: async (parent, args, context) => {
    //   if(context.user){
    //     await User.findOneAndUpdate(
    //       { _id: context.user._id},
    //       { cart: args}
    //     )
    //   }
    // }
    // addCart: async (parent, args, context) => {
    //   if(context.user){
    //     const cart = await Cart.create({ ...args, consume: context.user.})
    //   }
    // }
}
};

//   Query: {
//     me: async (parent, args, context) => {
//       if (context.user) {
//         const userData = await User.findOne({ _id: context.user._id })
//           .select('-__v -password')
//           .populate('email')

//         return userData;
//       }

//       throw new AuthenticationError('Not logged in');
//     },
//     users: async () => {
//       return User.find()
//         .select('-__v -password')
//         .populate('email')
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username })
//         .select('-__v -password')
//         .populate('email')
//     }
//   },

//   Mutation: {
//     addUser: async (parent, args) => {
//       const user = await User.create(args);
//       const token = signToken(user);

//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       const token = signToken(user);
//       return { token, user };
//     },
//   }


module.exports = resolvers;
