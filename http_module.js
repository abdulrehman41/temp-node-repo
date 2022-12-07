const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.write('Hello to my server');
        res.end()
    }
    else if(req.url === '/about')
    {
        res.write('About page');
        res.end()
    }
    else {
        res.write('404 Page not found');
        res.end()
    }

})

server.listen(5000)