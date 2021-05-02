const http= require('http');

const server=http.createServer(()=>{
    console.log("Hi I am Hear You")
})

server.listen(3000);