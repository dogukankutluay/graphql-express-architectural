//express
const express = require('express');
const app = express();

//env
const dotenv = require('dotenv');
dotenv.config();

//port
const PORT = process.env.PORT || 5000;

//apoloo
const apolloStart = require('./graphql/config/apolloStart');
apolloStart(app).then(response => {
  console.log(`Apollo started  URI= http://localhost:${PORT}/graphql`);
});

//mongodb
const mongoDbStart = require('./mongodb/mongodbStart');
mongoDbStart();

//server listen
app.listen(PORT, () => {
  console.log(`Server started  PORT= ${PORT}`);
});
