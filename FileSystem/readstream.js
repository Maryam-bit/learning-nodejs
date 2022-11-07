// fs.createReadStream(path[, options])

const fs = require("fs");
let readstream = fs.createReadStream('./textFiles/mypath.txt', {highWaterMark: 30, encoding: "utf8"})

readstream.on("string", (data) => {
    console.log(data.split(" "))
})

readstream.on("data", (data) => {
    if(data.indexOf("buffer") == -1) {
        console.log(data.toUpperCase())
        readstream.emit("string", data)
    } else {
        console.log(`length: ${data.length}`)
    }
})
