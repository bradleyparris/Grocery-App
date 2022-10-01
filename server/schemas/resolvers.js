 const { AuthenticationError } = require('apollo-server-express');
// const { User, Thought } = require('../models');
 const { signToken } = require('../utils/auth');
const {User, Produce} = require('../models');

const resolvers = {

  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('produces')
          .populate('dairy')
          .populate('meats')
          .populate('starch')
          .populate('packagedGoods');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    //GET all users
    users: async () => {
      return User.find()
      .select('-__v')
      .populate('produces')
      .populate('dairy')
      .populate('meats')
      .populate('starch')
      .populate('packagedGoods');
    },
    //GET user by Id
    user: async (parent, {_id}) => {
      return User.findOne({_id})
      .select('-__v -password')
      .populate('produces')
      .populate('dairy')
      .populate('meats')
      .populate('starch')
      .populate('packagedGoods');
    },
    //GET all Produces
    produces: async () => {
      return Produce.find();
    },
    //GET produce by id
    produce: async (parent, {_id}) => {
      return Produce.findOne({_id});
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

    addProduce: async (parent, args, context) => {
      if (context.user) {
        const produce = await Produce.create({ ...args, consumer: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { produces: produce._id } },
          { new: true }
        );
    
        return produce;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
}

};

module.exports = resolvers;
