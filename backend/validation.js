//validate schema
const Joi = require('@hapi/joi');

const registerValidation = (input) => {

    const schema = {
        name: Joi.string().min(2).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        address: Joi.string().min(6).required(),
    };
    return Joi.validate(input,schema);
};

const loginValidation = (input) => {

    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(input,schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
