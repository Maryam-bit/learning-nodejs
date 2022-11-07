// fs.readFile(path, {encoding, flag}, callback) - async
// fs.readFileSync(path, {encoding, flag}) - sync

const fs = require("fs");

const flagsFile = "textFiles/flags.txt";

// sync
let data = fs.readFileSync(flagsFile, "utf8")
console.log("data - sync: ", data)

// async
fs.readFile(flagsFile, (err, data) => {
    if(err) {
        return console.log("error: ", err);
    }
    console.log("data - async: ", data.toString())
})