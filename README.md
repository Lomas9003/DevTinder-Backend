# DevTinder-Backend
Backend repo for devtinder project 

Routing user express 
For all methods call 
app.use("route" , function)

For GET call 
app.get("route" , (req, res) => {
    res.send("message send by server")
})

same we can use for post put patch delete 

Note : - Route macthing will check form top to bottom if you right / route on top the rest of the bottom route will not work becuase it thing request is coming for / route 



/// Middleware working digram 
React Frontend
      │
      │ GET /users
      ▼
   Express
      │
      ▼
 Middleware 1
      │
      ▼
 Middleware 2
      │
      ▼
 Authentication
      │
      ▼
 Route Handler
      │
      ▼
 Database
      │
      ▼
 Response
      │
      ▼
 React Frontend

Middleware - > Middleware is basically a way to handel the or writing the logic before returing the response we can right that logic in Middleware

we can create a Middleware for admin so all the admin route first check the auth admin then only move to next route else it not match with auth it will redirect to error 

erro handeling - always try to handel error in try catch block for better user expirence else use err in route to handel some error happen outside the try catch 


// 3rd let's connect application with data base and save the data to db
     We have to download mongodb compase to see the db 
     we are using mongobd for db and it is no sql db 
     1. create config file to store data base conectivty credential 
          1. this above function to conect the application with db will return the promise it is a async function 
          and we can call the conectivity string by   await mongoose.connect("conecting string ")
          2. what mongoose will do -> mongoose is a libbray use to connect your application with mongodb and help to create the schema or model and apply rule to the db through the application
     2. create database.js file in utils or config folder add the credential there and export that 
     3. create a model of user or any new scheme you want to add in db add all the fields you want to add in api
     5. creat a scheme for new entry in db then call the api 
          1. by using new User({ here you can write a login to read the value from api and send to save in DB})
     6. alway do save before returing the response and save is asyn function 
     7. alwasy right the logic in try catch block to handel the api error beautifully 


