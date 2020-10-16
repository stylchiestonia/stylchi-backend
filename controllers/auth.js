const
    express = require("express");
    user = require("../models/users/user");
    router = express.Router();
    bcrypt = require("bcryptjs");
    jwt = require("jsonwebtoken");
    keys = require("../config/keys");
    validateLoginInput = require("../middleware/validations/login");
    validateRegisterInput = require("../middleware/validations/register");
    user = require('../models/users/user');

exports.login = async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    const result = await user.getUserByEmail(email);
    if (!result) {
        return res.status(404).json({ emailnotfound: "Email not found" });
    }
    const isMatch = bcrypt.compare(password, result.password);
    if (isMatch) {
        const payload = {
            id: user.id,
            email: user.email
        };
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            }
        );
    } else {
        return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
    }
}

exports.register = async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
      }
      const email = req.body.email;
      const result = await user.getUserByEmail(email);
      if (result) {
        return res.status(400).json({ email: "User already exists" });
      } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
              if (err) throw err;
              req.body.password = hash;
              const result = await user.createUser(req.body);
              res.json(result);
            });
          });    
      }
}