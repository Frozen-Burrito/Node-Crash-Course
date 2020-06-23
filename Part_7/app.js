const express = require('express');

const app = express();

// Initialize view engine
app.set('view engine', 'ejs');
// app.set('views', 'templates'); // Change views dir
app.use(express.static('public'));

app.listen(3000);

app.get('/', ( request, response ) => {
//    response.send('<h1>Home Page</h1>');
    context = {
        title: 'Home',
        blogs: [
            {title: 'This is a post', snippet: 'Vestibulum tristique diam quis orci ultricies suscipit.'},
            {title: 'How to make pizza', snippet: 'Vestibulum tristique diam quis orci ultricies suscipit.'},
            {title: 'Another post', snippet: 'Vestibulum tristique diam quis orci ultricies suscipit.'},
            {title: 'Start doing homework', snippet: 'Vestibulum tristique diam quis orci ultricies suscipit.'},
        ]
    }

    response.render('index', context);
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
    
    response.render('create_post', context);
})

// Return a 404 page
app.use(( request, response ) => {
    context = {
        title: '404',
    }
    
    response.status(404).render('404', context);
})