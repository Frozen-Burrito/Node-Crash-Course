const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const Post = require('./models/post');

const app = express();

// Connect App to MongoDB
const mongoURI = 'mongodb+srv://demo_user:DEMO-pw@nodebasics-q71zy.mongodb.net/node-basics?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('Connected to DB');
        app.listen(3000);
    })
    .catch((error) => {
        console.log(error);
    })

// Initialize view engine
app.set('view engine', 'ejs');
// app.set('views', 'templates'); // Change views dir

// Static files
app.use(express.static('public/styles'));

// Middleware
app.use(( request, response, next ) => {
    console.log('A request was made:');
    console.log(request.method, ' - Host:', request.hostname, ' - Path:', request.path);

    next();
});

app.use(morgan('dev'));

app.get('/', ( request, response ) => {
//    response.send('<h1>Home Page</h1>');
    Post.find().sort({ createdAt: -1 })
        .then( result => {
            context = {
                title: 'Home',
                blogs: result,
            }

            response.render('index', context);
        })
        .catch( error => {
            console.log(error);
        })
});

app.get('/about', ( request, response ) => {
    context = {
        title: 'About',
    }
    
    response.render('about', context);
});


app.get('/blogs/create', ( request, response ) => {
    context = {
        title: 'Create',
    }
    
    response.render('create', context);
})

// Return a 404 page
app.use(( request, response ) => {
    context = {
        title: '404',
    }
    
    response.status(404).render('404', context);
})