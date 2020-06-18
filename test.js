console.log("Hey nena");

const greet = (name) => {
    console.log(`Hello ${name}`);
}

greet("John");

global.setTimeout(() => {
    console.log('Timeout');
}, 3000)

console.log(__dirname);
console.log(__filename);