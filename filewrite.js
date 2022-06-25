const http=require("http");
const fs=require("fs")

const server=http.createServer((req,res)=>{
    fs.writeFile(`text.text`,`web site error`,(error,data)=>{
        console.log("file save")
    })
})
server.listen(3000,()=>{
    console.log("server is running port 3000")
})
