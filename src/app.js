const express = require("express");
const connectDB = require("./utils/database");
const User = require("./models/user");
const app = express();

// if you pass the json value then you must have this below function for all route or controler
app.use(express.json());

// This is the signup api which is use to create a new user
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

// get  user by emailId
app.get("/user", async (req, res) => {
  const { emailId } = req.query;
  if (typeof emailId !== "string" || !emailId.trim()) {
    return res.status(400).send("emailId query parameter is required");
  }

  try {
    const user = await User.findOne({ emailId: emailId.trim() });
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch user");
  }
});

// update user by emailId
app.put("/user", async (req, res) => {
  const { emailId } = req.query;
  if (typeof emailId !== "string" || !emailId.trim()) {
    return res.status(400).send("emailId query parameter is required");
  }

  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).send("A JSON object with user fields is required");
  }

  const editableFields = ["firstName", "lastName", "emailId", "age"];
  const updates = Object.fromEntries(
    Object.entries(req.body).filter(([field]) =>
      editableFields.includes(field),
    ),
  );
  if (Object.keys(updates).length === 0) {
    return res.status(400).send("No valid user fields provided");
  }

  try {
    const user = await User.findOneAndUpdate(
      { emailId: emailId.trim() },
      { $set: updates },
      { new: true, runValidators: true },
    );
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).send({ user });
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(409).send("A user with that emailId already exists");
    }
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).send("Invalid user data");
    }
    res.status(500).send("Failed to update user");
  }
});

// delete user by emailId
app.delete("/user", async (req, res) => {
  const { emailId } = req.query;
  if (typeof emailId !== "string" || !emailId.trim()) {
    return res.status(400).send("emailId query parameter is required");
  }

  try {
    const user = await User.findOneAndDelete({ emailId: emailId.trim() });
    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).send({ message: "User deleted successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to delete user");
  }
});

// Get API for feed to Get all the user
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to fetch users");
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
    console.error("DB connection failed:", error.message);
    process.exit(1);
  });
