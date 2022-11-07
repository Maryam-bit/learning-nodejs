// fs.open(path, flag, [mode], callback)
// fs.openSync(path, flag, [mode]) -> synchronous
const fs = require("fs");

const dirfile = "textFiles/dir.txt";
const flagsfile = "textFiles/flags.txt";



// Open File using fs.open
fs.open(flagsfile, "r+", (err, fd) => {
    if(err) {
        console.log(`message: ${err.message}`)
    } else {
        // read
        // write
        console.log(`file (${fd}) opened successfully`)
        fs.close(fd, (err) => {
            console.log("file closed")
        })
    }
})


