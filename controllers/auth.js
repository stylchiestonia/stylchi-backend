const
    express = require("express");
    user = require("../models/users/user");
    router = express.Router();
    bcrypt = require("bcryptjs");
    jwt = require("jsonwebtoken");
    keys = require("../config/keys");
    validateLoginInput = require("../middleware/validations/login");
    validateRegisterInput = require("../middleware/validations/register");
    expertSchedualeModel = require("../models/expert_scheduale/expert_scheduale");
    user = require('../models/users/user');
    sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SG_API_KEY)


exports.register = async (req, res) => {
    let userData = req.body.userData;
    const { errors, isValid } = validateRegisterInput(userData);
    if (!isValid) {
        return res.status(400).json(errors);
      }
    
      const email = userData.email;
      const result = await user.getUserByEmail(email);
      if (result) {
        return res.status(400).json({ data: "User already exists" });
      } else {
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(userData.password, salt, async (err, hash) => {
              if (err) throw err;
              userData.password = hash;
              const result = await user.createUser(userData);
              if(result.role === 'expert') {
                 await expertSchedualeModel.createExpertSchedualeOnRegister(result._id);
                }
                await sendWelcomeEmail(result.email, result.firstName, result.lang);
              res.json(result);
            });
          });    
      }
}
sendWelcomeEmail = async (recipientEmail, recipientFirstName, language) => {
    template_id = "d-22893eb00a414c77b5dd1e30665252fa"
    if (language === 'ENG') {
        template_id = "d-0b85f11a3c544e349e8b70c7dda8922a"
    }
    const msg = {
        to: recipientEmail,
        from: "hello@stylchi.com",
        templateId: template_id,
        dynamic_template_data: {
          first_name: recipientFirstName
        }        
      };
      return sgMail.send(msg);
  
}
exports.login = async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
      return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  const result = await user.getUserByEmail(email);
  if (!result) {
      return res.status(400).json( {data: "Email not found" });
  } else if (result.status === "inactive") {
    return res.status(400).json({data: "Your status is inactive"});
  }
  const isMatch = await bcrypt.compare(password, result.password);
  if (isMatch) {
      const payload = {
          id: result.id,
          email: result.email
      };
      await jwt.sign(
          payload,
          process.env.SECRET_KEY,
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
          .json({ data: "Password incorrect" });
  }
}
