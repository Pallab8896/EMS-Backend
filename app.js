var express = require('express'),
    app = express(),
    port = process.env.PORT || 4001;
mongoose = require('mongoose');
bodyParser = require('body-parser');
category = require('./Models/category-model');
expense = require('./Models/expense-model');
budget = require('./Models/budget-model');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://Pall8896:Pass*8896@cluster0-goplz.mongodb.net/test?retryWrites=true&w=majority');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'HEAD,GET,POST,PATCH,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var routes = require('./Routes/Routes'); //importing route
routes(app); //register the route

app.listen(port, () => {
    console.log('Server Started');
});

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});