//User Model to signup/login
const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    userName: {
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
        allowNull: false
      }
});

const User = model('User', UserSchema);

// export the User model
module.exports = User;