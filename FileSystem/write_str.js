// fs.write(fd, string[, position[, encoding]], callback)
// fs.writeSync(fd, string[, position[, encoding]])

const fs = require("fs");
const str = "\n This is the string I want to write! \n";
const fileName = "textFiles/mypath.txt";

fs.open(fileName, "a", (err, fd) => {
    if(err) {
        console.log(err.message)
    } else {
        // sync
        let bytes = fs.writeSync(fd, str)
        console.log("Bytes: ",bytes)
        console.log(`file: (${fd}) opened syccessfully`)

        // async
        fs.write(fd, str, (err, bytes) => {
            if(err) {
                return console.log("err: ", err)
            }
            console.log("Bytes  - async: ",bytes)
            console.log(`file:- async  (${fd}) opened syccessfully`)
            
        })

        fs.close(fd, (err) => {
            console.log("file closed!")
        })
    }

})