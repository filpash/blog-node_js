const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const config = require('./config/db');
const account = require('./routes/account');
const Post = require('./models/post');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Successful connection to batabase');
});

mongoose.connection.on('error', (err) => {
    console.log('Not successful connection to batabase' + err);
});

app.listen(port, () => {
    console.log('Server was started on port: ' + port)
})

app.get('/', (req, res) => {
    Post.find().then(posts => res.json(posts))
})

app.use('/account', account);