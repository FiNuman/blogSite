const express = require('express')
const routes = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
require("dotenv").config();
const strip = require('strip-comments')


routes
    .route('/profile')
    .get(async (req, res) => {
    
    })
    .post(async (req, res) => {
        
})


module.exports = routes;