const http=require("http");
const fs=require("fs")
fs.appendFile("test.txt",` \n ${new Date().toString()} more data`,(error,data)=>{
    console.log("file save")
})