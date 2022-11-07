// fs.readdir(path[, options], callback)
// fs.readdirSync(path[, options])

const fs = require('fs')

let directory = "textFiles";
let dirBuf = Buffer.from(directory)

// sync
let files = fs.readdirSync(directory);
console.log("files: - sync", files)


// async
fs.readdir(dirBuf, (err, files) => {
    if(err) {
        console.log(err.message)
    } else {
        console.log("files: - async", files)
    }
})