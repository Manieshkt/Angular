var http = require('http');
const data = require('./content')
const fun=require('./fun')
const fs=require('fs')
const path=require('path')

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/JSON' });
        res.end(JSON.stringify(data), 'utf-8')
    }

    else if (req.url === '/api/data') {
        res.write('Hello World')
        res.end()
    }

    else if(req.url==='/api/fun'){
        fun(20,30)
        .then((result)=>{
            res.write(result.toString())
            res.end()
        })
        .catch(err=>{
            res.write('error')
            res.end()
        })
    }

    else if(req.url==='/api/content'){
        const content=path.join(__dirname,'index.html')
        fs.readFile(content,'utf-8',(err,data)=>{
            if(err){
                res.write('No Data')
                res.end()
            }
            else{
                res.end(data)
            }
        })
    }

    else{
        res.write('404 Error')
        res.end()
    }

}).listen(8080);
