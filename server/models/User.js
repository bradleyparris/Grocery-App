//User Model to signup/login
const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        unique: true,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
      },
      password: {
        type: String,
        required: true,
        allowNull: false
      },
//ADDED CART MODEL
      carts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Cart'
        }
      ]
      //good for situations for variables
    // [0]['produce'] == [0].produce


     
});

// set up pre-save middleware to create password
UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};



const User = model('User', UserSchema);

// export the User model
module.exports = User;