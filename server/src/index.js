const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')


//initialization
const app = express()
const indexRouter = require('./routes')


// Setting
app.set('port', process.env.PORT || 4000);
const dbOptions = {
    host: '127.0.0.1',
    port: 33065,
    user: 'root',
    password: '',
    database: 'budget'
}

// Middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// Routes
app.use('/', indexRouter)


app.listen(app.get('port'), () => {
    console.log('Running on port: ', app.get('port'));
})