const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('<h1>This is the home page!</h1>')
    }
    if(req.url === '/about'){
      res.end('<h1>Brief introduction about our history</h1>')
    }
    res.end(`<h2>Oop!</h2>`)
})

server.listen(5000); 