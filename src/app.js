const express = require("express");
const connectDB = require("./utils/database");
const User = require("./models/user");
const app = express();

// if you pass the json value then you must have this below function for all route or controler 
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    console.log("user updated");
    res.status(201).send("user created successfully..");
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

connectDB()
  .then(() => {
    console.log("database conected");
    app.listen(3000, () => {
      console.log("server is started on port 3000");
    });
  })
  .catch((error) => {
    console.error("DB connection fails");
  });
