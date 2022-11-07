// fs.write(fd, string[, position[, encoding]], callback)
// fs.writeSync(fd, buffer[, offset[, length[, position]])

const fs = require("fs");
const data = "OFFSETThis is what I am writing to the file\n";
const bufdataFile = "textFiles/bufdata.txt";

const buf = Buffer.from(data, "utf8")
const offset = 6;
fs.open(bufdataFile, "w", (err, fd) => {
    if(err) {
        console.log(err.message)
    } else {
        // sync
        let byte = fs.writeSync(fd, buf, offset, buf.byteLength -offset , 0);
        console.log(`${byte} bytes written`);

        // async 
        fs.write(fd, buf, offset, buf.byteLength - offset, 0, (err, bytes) => {
            if(err) {
                return err
            }
            console.log(`${bytes} bytes written`)
        })

        fs.close(fd, (err) => {
            console.log("file closed!");
        })
    }
})