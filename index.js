const express = require('express');

require('dotenv').config();

const connect = require('./src/configs/db');

const app = express();

const customerController = require('./src/controllers/customer.controller');
const addressController = require('./src/controllers/address.controller');

app.use(express.json());

app.use('/customers', customerController);
app.use('/addressess', addressController);

app.listen(process.env.PORT || 5000, async () => {
    try{
        await connect();
        console.log('Listening on Port 5000');
    }
    catch(err){
        console.log(err.message);
    }
});