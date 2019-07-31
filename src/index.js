const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controllers/authController')(app);

// Welcome Page
app.get('/', (req, res) => {
    res.send('Node API is on Fire!!');
});


app.listen(port, () => {
    console.log('Server running on port ', port);
})