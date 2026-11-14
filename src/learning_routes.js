// we require express in our folder
const express = require("express");

const app = express();

// syntax for the route is
// app.METHOD(PATH, HANDLER);
app.post("/user", (req, res) => {
  res.send("data updated sucessfully");
});

app.get("/user", (req, res) => {
  //logic to update the data base with post call after then return the response
  // by using below query we can read the querry parameter pass in routing mostly in key value pairs
  console.log(req.query);
  res.send({ firstName: "Ishan", LastName: "Lomas" });
});

app.get("/user");

app.put("/user", (req, res) => {
  // logic to update the post call
  res.send("put method is updated");
});

// reading the id in from the route
app.patch("/user/:id", (req, res) => {
  // use to read the id value in routes
  console.log(req.params);
  res.send("User partially updated");
});

app.delete("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("User deleted");
});

//Multiple Route Parameters

app.get("/user/:userId/orders/:orderId", (req, res) => {
  console.log(req.params);

  //   if you want to share something in json formate
  res.json(req.params);
});

// we have diffent factor also which we can pass in route also like below

app.get(/a/, (req, res) => {
  res.send("Path contains a");
  // example /apple , /about , /cat. any word contain a this route will work
});

// we can write multiple https method in same why as below

app
  .route("/users")
  .get((req, res) => {
    res.send("info of the user");
  })
  .post((req, res) => {
    res.send("user updated sucessfully");
  })
  .put((req, res) => {
    res.send("user data updated sucessfully");
  })
  .delete((req, res) => [res.send("user deleted")]);

// app.use will call the route or controler in every https method whether it is get put or post so we will use the aap.get or app.post
// doing routing from diffrent route
app.use("/test", (req, res) => [
  res.send("request response is coming from /test part"),
]);

app.use("/xyz", (req, res) => {
  res.send("normal testing call");
});

// app.use("/admin" , (req , res) => {
//     res.send("response is coming from admin part routes")
// })

// we can't add / in the top because every route starts from / so express diverd the request to first / then it wil not read other / itmes

// app.use("/", (req , res) => {
//     res.send("hello world from dashboard automatically updated")
// })

// by this why we have created the server and server will start listing
app.listen(3000, () => {
  console.log("server is started on port 3000");
});

//  once we do any change in our code we have to close the server and restart the server to see the changes
// to resolve above issuse we can install nodemone globaly in our systen so it will automatically restart the server once we do any changes


// midlewear learnig notes

const mongooes = require("mongoose")

const connectDB = async () => {
    await mongooes.connect("mongodb+srv://ishanlomas998_db_user:vM2xtizZK3EweFyI@devtinder.b1h83fr.mongodb.net")
}

connectDB().then((val) => {
    console.log("DBconected" , val)
}).catch((error) => {
    console.error(error)
})