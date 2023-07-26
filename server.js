const express = require('express');
const app = express();
const port = 4002;
const connectdb = require('./config/contactlist');
const contactroute = require('./routes/contactroute');

connectdb();

app.use(express.json());

app.use('/contacts', contactroute); 

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
