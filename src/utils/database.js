const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ishanlomas998_db_user:vM2xtizZK3EweFyI@devtinder.b1h83fr.mongodb.net/devTinderDB",
  );
  console.log("db created")
};


// console.log("what come in db ", connectDB())

module.exports = connectDB;
