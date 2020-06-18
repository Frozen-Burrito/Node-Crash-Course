const fs = require('fs');

// Read files 
fs.readFile('../docs/blog_1.txt', (error, data) => {
    if (error) {
        console.log(error);
    }

    console.log(data.toString());
    
});

// Writing files
text = 'Hello world'
fs.writeFile('../docs/blog_1.txt', text, () => {
    console.log('File written');
    
})

fs.writeFile('../docs/blog_2.txt', text, () => {
    console.log('File written');
    
})

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
    
        console.log('Folder created');
        
    })
} else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }

        console.log('Folder deleted');
    })
}

// Delete files
file = '../docs/deleteme.txt';
if (fs.existsSync(file)) {
    fs.unlink(file, (error) => {
        if (error) {
            console.log(error);
        }

        console.log(file, ' was deleted.');
    })
}