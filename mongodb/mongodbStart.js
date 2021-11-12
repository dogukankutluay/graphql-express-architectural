const mongoose = require('mongoose');
const mongoDbStart = () => {
  if (process.env.MONGO_URI?.length) {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MongoDB Connetion Successfull');
      })
      .catch(err => console.error(err));
  } else {
    console.log(
      '\u001b[' +
        31 +
        'm' +
        '----ERROR: Please enter mongo db uri----' +
        '\u001b[0m'
    );
  }
};
module.exports = mongoDbStart;
