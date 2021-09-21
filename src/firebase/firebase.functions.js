"use strict";
exports.__esModule = true;
var auth_1 = require("firebase/auth");
var firebase_1 = require("./firebase");
exports.createNewUser = function (email, password, history) {
    auth_1.createUserWithEmailAndPassword(firebase_1.auth, email, password)
        .then(function (userCredential) {
        history.push('/');
    })["catch"](function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        throw new Error("Error: " + errorCode + ". Message: " + errorMessage);
    });
};
exports.signIn = function (email, password, history) {
    auth_1.signInWithEmailAndPassword(firebase_1.auth, email, password)
        .then(function (userCredential) {
        history.push('/');
    })["catch"](function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        throw new Error("Error: " + errorCode + ". Message: " + errorMessage);
    });
};
exports.userState = function (dispatch) {
    return auth_1.onAuthStateChanged(firebase_1.auth, function (user) {
        console.log('the user is >>>', user);
        if (user) {
            // User is signed in.
            dispatch({ type: '@user/set-state', payload: user });
        }
        else {
            // No user is signed in.
            dispatch({ type: '@user/set-state', payload: null });
        }
    });
};
exports.signOutUser = function () {
    return auth_1.signOut(firebase_1.auth)
        .then(function () { return console.log('signed out'); })["catch"](function (error) {
        throw new Error("Error: " + error.code + ". Message: " + error.message);
    });
};
