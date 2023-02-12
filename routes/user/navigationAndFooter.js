const express = require('express')
const routes = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
require("dotenv").config();
const strip = require('strip-comments')

//--------------------------------------------navigation bar
routes
    .route('/bar')
    .get(async (req, res) => {
        res.render('blog_and_navigation/navigation', (err, html) => {
            if (err) {
                res.send({ status: 400 })
                return;
            }
            res.send({ status: 200, html: html })
        })
    })
    .post(async (req, res) => {

    })

// ---------------------------------------footer
routes
    .route('/footer')
    .get(async (req, res) => {
        res.render('blog_and_navigation/footer', (err, html) => {
            if (err) {
                res.send({ status: 400 })
                return;
            }
            res.send({ status: 200, html: html })
        })
    })
    .post(async (req, res) => {

    })


module.exports = routes;