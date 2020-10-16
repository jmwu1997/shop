
const router = require('express').Router();
const User = require('../models/User');
const {registerValidation,loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post('/register', async (req,res) => {
    

    //check if email exist
    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send("Email exists!");
    
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    
    //new user json
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        address: req.body.address
    });


    //send
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
    
});

//Login
router.post('/login', async(req,res) => {

    //check if email exist
    const emailExist = await User.findOne({email:req.body.email});
    if(!emailExist) return res.status(400).send("Email does not exist");
    //check if password match
    const info = await User.findOne({email:req.body.email});
    const correct_password = await bcrypt.compare(req.body.password, info.password);
    if (!correct_password) return res.status(400).send("Wrong email/password");


    //token
    const token = jwt.sign({_id: info._id},process.env.Token_pass);
    res.header('auth-token',token).send({
        info,
        token
    });


});

//Login
router.post('/update', async(req,res) => {

    //check if email exist
    const emailExist = await User.findOne({email:req.body.email});
    if(!emailExist) return res.status(400).send("Email does not exist");
    //update values
    var email = { email: req.body.email };
    var updated_value = { $set: {name: req.body.name, address: req.body.address } };
    const updates = await User.updateOne(email, updated_value, function(err, res) {
        if (err) throw err;
        console.log("User account updated");
    });

});

module.exports = router;