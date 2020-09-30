
const router = require('express').Router();
const User = require('../models/User');
const {registerValidation,loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req,res) => {

    //validation
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(res.send(error.details[0].message));

    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send("Email exists!");
    
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address
    });



    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});

//Login
router.post('/login', async(req,res) => {

    //validation
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(res.send(error.details[0].message));

    const emailExist = await User.findOne({email:req.body.email});
    if(!emailExist) return res.status(400).send("Email does not exist");

    const info = await User.findOne({email:req.body.email});
    const validPass = await bcrypt.compare(req.body.password, info.password);
    if (!validPass) return res.status(400).send("Wrong email/password");
    
    //token
    const token = jwt.sign({_id: info._id},process.env.Token_pass);
    res.header('auth-token',token).send(token);
    

});

module.exports = router;