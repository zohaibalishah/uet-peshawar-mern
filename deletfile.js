const fs=require("fs")

fs.unlink("index.html",()=>{
    console.log("file deleted")
})
