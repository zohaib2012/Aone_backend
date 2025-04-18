import express from "express";
import { displayusers, loginuser, registeruser, logoutuser, forgetPassword, updatepassword } from "../controller/usercontroller.js";
import { protectedroutes } from "../Middleware/protectedroutes.js";
import { generateverificationcode, verifycode } from "../controller/emailverification.controller.js";

export let userroutes = express.Router();


userroutes.route("/register").post(registeruser);


userroutes.route("/login").post(loginuser);


userroutes.route("/logout").post(logoutuser);


userroutes.route("/get").get(protectedroutes, displayusers);



userroutes.route("/send-code").post( generateverificationcode);
userroutes.route("/verify-code").post( verifycode);
userroutes.route("/forgetpassword").post(forgetPassword)


userroutes.route("/updatepassword").post( protectedroutes,updatepassword)