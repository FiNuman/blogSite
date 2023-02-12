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
        res.render('profile/profile')
    })
    .post(async (req, res) => {
        
    })


//==========================================timeline get and post new thing--------------------------
routes 
    .route('/timeline')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        
    })


//==========================================user profile about--------------------------
routes 
    .route('/about')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        
    })


    //==========================================photos--------------------------
routes 
    .route('/photo')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        
    })



//==========================================friend--------------------------
routes 
    .route('/friend')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        
    })



module.exports = routes;