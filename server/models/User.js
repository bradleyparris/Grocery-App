//User Model to signup/login
const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

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
        required: true,
        allowNull: false
      },

      produces: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Produce'
        }
      ],

      dairy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Dairy'
        }
      ],
      meats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meat'
        }
      ],
      starch: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Starch'
        }
      ],
      packagedGoods: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Goods'
        }
      ]


     
});

UserSchema.pre('save', async function save(next) {
    var user = this;
    if(!user.isModified('password')) return next();
    try{
         bcrypt.hash(user.password, 10);
           if(err) return next(err);

           user.password = hash;
    }catch (err) {
    return next(err);
    }
})

// {
//     hooks: {
//         //setting up hooks to hash password
//         async beforeCreate(UserSchema) {
//             UserSchema.password = await bcrypt.hash(UserSchema.password, 10);
//             return UserSchema;
//         }
//             }
// }



const User = model('User', UserSchema);

// export the User model
module.exports = User;