const fs = require('fs');

filePath = '../docs/blog_3.txt';
writeFilePath = '../docs/blog_4.txt';

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(writeFilePath);

// Read and then write
// readStream.on('data', (chunk) => {
//     console.log('New chunk');
//     console.log(chunk);

//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

// Pipe
readStream.pipe(writeStream);