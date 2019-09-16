const http=require('http');

var server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    if(req.url==='/user'){
        res.end("{'user':'prashant'}");
    }
    else if(req.url==='/order'){
        res.end("{'id':'1','item':'2'}");
    }
});
server.listen(3000);
console.log("Server is up");