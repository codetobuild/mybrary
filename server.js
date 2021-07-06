if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('---Database connected---')
});

//routes
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))




app.use('/', indexRouter);



app.listen(process.env.PORT || 3000, () => {
    console.log('---PORT : 3000----')
})
