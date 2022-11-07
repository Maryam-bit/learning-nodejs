// fs.createWriteStream(path[, options])

const fs = require("fs")
// const data = "Options may also include a start option to allow writing data at some position past the ...."

let rstream = fs.createReadStream("./textFiles/filepath.txt")
let wstream = fs.createWriteStream("./textFiles/write.txt")

rstream.on("data", (data) => {
    wstream.write(data.toString().toUpperCase() + "30 bytes written\n", (err) => {
        if(err) {
            console.log(err.message)
        }
        else {
            console.log("bytes written")
        }
    })
    
})