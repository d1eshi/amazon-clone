"use strict";
exports.__esModule = true;
/* eslint-disable no-unused-vars */
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var firestore_1 = require("firebase/firestore");
var firebase_utils_1 = require("./firebase.utils");
var app = app_1.initializeApp(firebase_utils_1.firebaseConfig);
var auth = auth_1.getAuth();
exports.auth = auth;
var db = firestore_1.getFirestore();
exports.db = db;
