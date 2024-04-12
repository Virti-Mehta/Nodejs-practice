const app = require('./app')
const port = process.env.PORT;


// const express = require("express");

// require("./db/mongoose");
// const User = require("./models/user");
// const Task = require("./models/task");
// const userRouter = require("./routers/user");
// const taskRouter = require("./routers/task");


// const app = express();

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// app.use((req, res, next) => {
//   if(req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// })

// Site is under maintainence. Please try soon
// Chalenge: Setup a middleware for maintainence mode
// app.use((req, res, next) => {
//   res.status(503).send('Site is under maintainence. Please try soon.')
// })

// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);



