const http = require('http');
const fs = require('fs');

const server = http.createServer(( request, response ) => {
    console.log('Request: ', request.url, request.method);

    // Set header content type
    response.setHeader('Content-Type', 'text/html');

    // Return a response
    // response.write('<h1>This is the response!</h1>');
    // response.write('<p>A cool response</p>');
    // response.end();

    // Get the route 
    let viewsPath = '../views/';

    switch(request.url) {
        case '/':
            viewsPath += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            viewsPath += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-us':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
            break;  
        default: 
            viewsPath += '404.html';
            response.statusCode = 404;
            break;
    }

    // Respong with an html file
    fs.readFile(viewsPath, ( error, data ) => {

        if (error) {
            console.log(error);
            response.end();
        }

        // response.write(data);
        response.end(data);
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000');
})