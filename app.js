
//========================================================================================
//                                import part
//========================================================================================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
require("dotenv").config();
const strip = require('strip-comments');
const { Cheerio } = require("cheerio");
const cors = require('cors')


// app.use(cors())


//Use this if you don't have any cloud Database
//NOTE:: Install mongobd on your pc or server and create a folder in c drive 'data/db'
//========================================================================================
//                                database
//========================================================================================
mongoose.connect('mongodb://127.0.0.1:27017/example', { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('MongoDB database connection successfully');
});


//========================================================================================
//                                Express fil
//========================================================================================
app.use('/static', express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/files', express.static('files'));
app.use('/img', express.static('img'));
app.use(express.urlencoded({
    limit: '150mb',
    extended: true
}));



//========================================================================================
//                                route
//========================================================================================
app.use('/admin', require('./routes/admin/test'))
app.use('/user', require('./routes/user/profile'))
app.use('/blog', require('./routes/user/blog'))
app.use('/u_log', require('./routes/login-route/user-login'))
app.use('/a_log', require('./routes/login-route/admin-login'))
app.use('/nav', require('./routes/user/navigationAndFooter.js'))
app.use('/home', require('./routes/user/home.js'))



app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "pug"));


//========================================================================================
//                                request and responsse
//========================================================================================
app.get('/', (req, res, next) => {
    res.render('home/home.pug', (err, html) => {
        if (err) console.log(err)
        else {
            res.send(strip(html))
        }
    })
})




app.post('/user_signin', multer({}).none(), async (req, res) => {
    console.log('ok')
    res.send('sdw')

})

//========================================================================================
//                                Server start
//========================================================================================
app.listen(process.env.PORT || 80, () => {
    console.log(`Running`);
})

