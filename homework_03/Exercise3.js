const  myFile = require('./create-big-file');
const  {promisify} = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);
const http = require('http');
const server = http.createServer();


async function mainReadFileAsync() {
    try {
        let text = await readFileAsync(myFile.path, { encoding: 'utf8'})
        return text;
    }catch (e) {
        console.log('Error', e);
    }
}

// Way 1
// server.on('request',(req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write(fs.readFileSync(myFile.path, { encoding: 'utf8'}));
//     res.end();
// }).listen(3000, () => console.log('listening on 3000 Oka?'));

// Way 2
// server.on('request', function (req, res)  {
//     try {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         // const buffer = await readFileAsync(myFile.path);
//        fs.readFile(myFile.path, { encoding: 'utf8'},function (err,dta) {
//            res.write(dta.toString());
//            res.end();
//        });
//
//     }catch (e) {
//         console.log('Error', e);
//     }
// }).listen(3000, () => console.log('listening on 3000...'));

// Way 3 Stream
server.on('request', function (req, res)  {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const readable = fs.createReadStream(myFile.path, { encoding: 'utf8', highWaterMark: 16 * 1024} );
    readable.on('data', function (chunk) {
        res.write(chunk.toString());
        res.write("////////////////////////////////////////////////////////////////////////////////////////////////////");
    });
}).listen(3000, () => console.log('listening on 3000...'));