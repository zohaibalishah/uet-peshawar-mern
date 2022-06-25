const http=require("http");
const fs=require("fs")

const server=http.createServer((req,res)=>{
    fs.readFile("index.html",(error,data)=>{
        if(error){
            res.write('file error')
            res.end()
            return
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        }
    })
})
server.listen(3000,()=>{
    console.log("server is running port 3000")
})
