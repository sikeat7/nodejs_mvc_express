import mongoose from 'mongoose';
import Validator from 'validatorjs';
const Schema = mongoose.Schema;

const User = new Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});

User.statics.validateCreate = (obj) => {
    const rules = {
        name: 'required',
        email: 'required',
        password: 'required'
    }
    return new Validator(obj, rules);
};

module.exports = mongoose.model('User', User);