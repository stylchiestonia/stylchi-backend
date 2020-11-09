const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const routes = require("./routes/api/routes");
const app = express();
const cors = require('cors');
    


app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = process.env.MONGO_URI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api", routes);
const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server up and running on port ${port} !`));

