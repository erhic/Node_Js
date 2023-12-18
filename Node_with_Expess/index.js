//Application dependecies
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//Application object -to access all properties/methods
const app = express();

//middleware -wioll be used to handle post data or request body
const mdware = express.json();
