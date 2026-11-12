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


