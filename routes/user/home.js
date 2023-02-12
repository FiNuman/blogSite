const express = require('express')
const routes = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
require("dotenv").config();
const strip = require('strip-comments')




//------------------------------------------Home Body
routes
    .route('/home_body')
    .get(async (req, res) => {
        res.render('home/home_body', (err, html) => {
            if (err) {
                console.log(err)
                res.send({ status: 400 })
                return;
            }
            res.send({ status: 200, html: html })
        })
    })
    .post(async (req, res) => {

    })

module.exports = routes;