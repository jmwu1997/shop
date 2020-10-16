const express = require('express');
const app = express();
const mongoose = require('mongoose')
require ('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.Port || 3000;

//connection to mongodb
mongoose.connect(process.env.DB,  
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>console.log('DB connected')
    );
    
app.use(bodyParser.json());
app.use(cors());

//import routes
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

//Route middlewares

//post -- not yet implemented
app.use('/posts',postsRoute);

//auth- includes user login, register, update
app.use(express.json());
app.use('/user',authRoute);

// app.post('/test', function(req,res){
//     console.log(req.body);
//     res.status(200).send({"message": "data"})
//     console.log(req.body.password)
// })

app.use(express.static(__dirname + '/../frontend/dist/shop'));
app.get('/*',(req,res) => res.sendFile(path.join(__dirname)));
app.listen(3000, () => console.log('Server up and running'));

