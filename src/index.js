const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const MONGODB_URL = config.mongoose.url;


// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
let server;
mongoose
  .connect(MONGODB_URL, config.mongoose.options)
  .then(() => {console.log("Connected to DB at", MONGODB_URL)
    server = app.listen(config.port, () => {
        console.log(`Listening to port ${config.port}.`);
    })    
})  
  .catch((err) => console.log("Error in connecton to MongoDB", err));
