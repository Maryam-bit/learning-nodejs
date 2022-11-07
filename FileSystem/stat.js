// get stats of file using fs.stat 

// fs.stat(path, callback)
// fs.statSync(path) -> synchronous
const fs = require("fs");

const dirfile = "textFiles/dir.txt";
const flagsfile = "textFiles/flags.txt";

// ******stat sync******
let stats = fs.statSync(dirfile)
console.log(`size: ${JSON.stringify(stats)}`)


// ****stat****** 
fs.stat(flagsfile, (err, stats) => {
    if(err) {
        throw err;
    } else {
        console.log(stats, {colors: true});
    }
})