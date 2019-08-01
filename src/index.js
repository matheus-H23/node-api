const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'app/assets')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'))

// Import routes in application
app.use(require('./app/routes/routes'));

app.listen(port, () => {
    console.log('Server running on port ', port);
})