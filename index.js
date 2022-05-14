require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');


const app = express();
const port = process.env.PORT || 3000;
const dataBaseUrl = process.env.DATABASE_URL;


app.use(express.json());
app.use('/api', routes);


mongoose.connect(dataBaseUrl)
.then(() => {

   app.listen(port);
   console.log(`O servidor foi iniciado na porta ${port}`);

})
.catch((error) => {

    console.log(error);

});


