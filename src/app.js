// we require express in our folder 
const express = require("express");

const app = express();

// doing routing from diffrent route
app.use("/test", (req , res) => [
    res.send("request response is coming from /test part")
])

app.use("/admin" , (req , res) => {
    res.send("response is coming from admin part routes")
})

// we can't add / in the top because every route starts from / so express diverd the request to first / then it wil not read other / itmes

app.use("/", (req , res) => {
    res.send("hello world from dashboard automatically updated")
})


// by this why we have created the server and server will start listing 
app.listen(3000, () => {
  console.log("server is started on port 3000");
});

//  once we do any change in our code we have to close the server and restart the server to see the changes
// to resolve above issuse we can install nodemone globaly in our systen so it will automatically restart the server once we do any changes