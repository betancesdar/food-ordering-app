import bcrypt from 'bcrypt';

const { model, models, Schema } = require("mongoose");

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String,
        required: true,
        validate: pass => {
           if(!pass?.length || pass?.length < 6){
             new Error('password must be at least 6 characters!');
             return false;
           }
        },
    },
    phone: {type: String, required: true},
    
}, {timestamps: true});

UserSchema.post('validate', function (user) {
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
});

export const User = models?.User || model('User', UserSchema);