
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
const strip = require('strip-comments')