const express = require('express')
const route = express.Router();
const multer = require('multer')
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const cookie = require('cookie-parser')
const saltRounds = 10;
let jwt = require('jsonwebtoken')
const jwtcheck = require('jwt-check-expiration')
const strip = require('strip-comments')

route.use(cookie())

//mongoose schema 
let new_user = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
    gender: String,
    pass: String
})
//mongoose model 
let new_user_log_model = mongoose.model('user', new_user)


//----------------------------------Register
route
    //render new register page 
    .route('/register')
    .get((req, res) => {
        res.render('log/register', (err, html) => {
            res.send(strip(html))
        })
    })
    //hadle register data
    .post(multer({}).none(), async (req, res) => {
        if (await new_user_log_model.findOne({ email: req.body.email })) {
            res.send(403)
            return;
        }
        res.render('./log/password', ((err, html) => {
            let token = jwt.sign(req.body, process.env.jwt_key, { expiresIn: '10 minute' });
            res.cookie('jwt', token)
            res.send(strip(html))
        }))
    })

route
    //handle register password
    .route('/new_user_register')
    .post(multer({}).none(), async (req, res) => {

        if (await new_user_log_model.findOne({ email: req.body.email })) {
            res.json({ status: 403 })
            return;
        }
        jwt.verify(req.cookies.jwt, process.env.jwt_key, (err, userdata) => {
            if (err) {
                res.json({ status: 'expireend' })
                return;
            } else {
                bcrypt.hash(req.body.pass, saltRounds, function (err, encode_password) {
                    let data = new new_user_log_model({
                        first_name: userdata.first_name,
                        last_name: userdata.last_name,
                        email: userdata.email,
                        phone: userdata.phone,
                        address: userdata.address,
                        gender: userdata.gender,
                        pass: encode_password
                    })
                    data.save()
                        .then(data => {
                            res.json({ status: 200 })
                        })
                        .catch(err => {
                            res.json({ status: 400 })
                        })
                });
            }
        })
    })




//------------------------------------Login
route
    .route('/login')
    .get((req, res) => {
        res.render('log/login', (err, html) => {
            res.send(strip(html))
        })
    })

module.exports = route;