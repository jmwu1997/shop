// const express = require('express');
// const app = express();
// const mongoose = require('mongoose')
// require ('dotenv/config');

// //connection to mongodb
// mongoose.connect(process.env.DB,  
//     { useNewUrlParser: true, useUnifiedTopology: true },
//     ()=>console.log('DB connected')
//     );

// //import routes
// const postsRoute = require('./routes/posts');
// const authRoute = require('./routes/auth');

// //Route middlewares
// //post
// app.use('/posts',postsRoute);

// //auth
// app.use(express.json());
// app.use('/user',authRoute);




// app.listen(3000, () => console.log('Server up and running'));


// app.get('/',(req,res) => {
//     res.send('We are home')
// });


// app.listen(3000);

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.Port || 3000;

app.use(express.static(__dirname + '/../frontend/dist/shop'));

app.get('/*',(req,res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port,()=> console.log('Running'));