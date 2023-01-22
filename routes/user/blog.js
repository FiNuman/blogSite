const express = require('express')
const routes = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
require("dotenv").config();
const strip = require('strip-comments')


routes 
    .route('/blog')
    .get((req, res) => {
        res.render('blog_and_navigation/blog_body.pug', (err, html) => {
            res.send(strip(html))
        })
    })


module.exports = routes;