// fs.read(fd, buffer, offset, length, position, callback)
// fs,readSync(fd, buffer, offset, length, position) -> synchronous

const fs = require("fs")
const dirFile = "textFiles/dir.txt"
const flagsFile = "textFiles/flags.txt"

let fileSize = fs.statSync(dirFile).size
console.log("file size: ", fileSize)
let buf = new Buffer(fileSize)
console.log(buf)
fs.open(dirFile, "r+", (err, fd) => {
    if(err) {
        throw err
    } else {
        console.log(`file (${fd}) successfully opened`)

        // sync 
        let bytes = fs.readSync(fd, buf, 0, fileSize, 0)
        console.log("byptes: ",bytes)
        console.log("conent: ", buf.toString())

        // async
        fs.read(fd, buf, 0, fileSize, 0, (err, bytes) => {
            if(err) {
                console.log("err", err)
            } else {
                console.log("byptes: ", bytes)
                console.log("content: ", buf.toString())
            }
        })
        fs.close(fd, (err) => {
            console.log("file closed!")
        })
    }
})