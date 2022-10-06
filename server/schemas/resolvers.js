const { AuthenticationError } = require('apollo-server-express');
// const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const {User, Product} = require('../models');


const resolvers = {

  Query: {
    users: async (parent, {username}) => {
      const params = username ? {username} : {};
      return User.find(params)
    },

    products: async () => {
      return Product.find();
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

    addProduct: async (parent, args, context) => {
      if (context.user) {
        const product = await Product.create({ ...args, consumer: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { products: product._id } },
          { new: true }
        );

        return product;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
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
