const express = require('express');

const app = express();

app.listen(3000);

app.get('/', ( request, response ) => {
//    response.send('<h1>Home Page</h1>');
    response.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', ( request, response ) => {
    response.sendFile('./views/about.html', { root: __dirname });
});

// Redirect
app.get('/about-hey', ( request, response ) => {
    response.redirect('/about');
})

// Return a 404 page
app.use(( request, response ) => {
    response.status(404).sendFile('./views/404.html', { root: __dirname });
})