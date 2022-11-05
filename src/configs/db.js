const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://zaki:zaki1234@gdknproject.6rewoyf.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
