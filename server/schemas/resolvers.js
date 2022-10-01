// const { AuthenticationError } = require('apollo-server-express');
// const { User, Thought } = require('../models');
// const { signToken } = require('../utils/auth');
const {User, Produce} = require('../models');

const resolvers = {

  Query: {
    users: async (parent, {userName}) => {
      const params = userName ? {userName} : {};
      return User.find(params)
    },

    produces: async () => {
      return Produce.find();
    }

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
