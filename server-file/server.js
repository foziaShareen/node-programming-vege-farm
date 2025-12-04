const server = require('http').createServer();
const fs = require('fs');


server.on('request', (req, res) => {
    //solution1 ,
    // problem here whole data is write and then send, if large data then it will take lot of time
    // fs.readFile('test.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         res.writeHead(500, {'Content-Type': 'text/plain'});
    //         return res.end(err.message);
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/plain'});
    //     res.end(data);
    // });

    //solution2 stream,
    //problem here is back pressure ,as receiving stream which is res in this case is fast than write stream
    // keep in mind that request and response are allso streams
    // const readStream = fs.createReadStream('test.txt');
    //  readStream.on('data', chunk => {
    //  res.write(chunk);
    //  })
    //  readStream.on('end', () => {
    //     res.end();
    //  })
     
    // readStream.on('error', err => {
    //     res.statusCode = 500;
    //     console.log(err);
       
    //     res.end('File not found');
    // })
    // 3rd solution
    const readStream = fs.createReadStream('test.txt');
     readStream.pipe(res);
     // here readable stream is piped to writable stream, readableStream is readablee and res stream is writable,
     // readableStream is piped to writableStream
});

server.listen(8000,'127.0.0.1', () => {
    console.log('Listening on port 8000');
});