const http=require("http");
const fs=require("fs")

const server=http.createServer(function(req,res){

    if(req.url=="/"){
        res.end("This is the Home Page")
    }

    if(req.url=="/about"){
        res.end("This is the About Page")
    }
    if(req.url=="/contact"){
        res.end("This is the About Page")
    }
    if(req.url=="/file-write"){
        fs.writeFile('demo.txt',"Hello World",function (err){
            if(err){
                res.end("Error creating the file")
            }
            else{
                res.end("File create success")
            }
        })
    }

})

server.listen(5500,function(){
    console.log("Server Running...")
})