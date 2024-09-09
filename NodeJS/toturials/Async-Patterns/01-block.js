/*
The point of this example is that it will take a long time to run the loop in the middle called blocking code
If you have 3 tabs open to the homepage everything will load fine but change one part to /about 
and then event the homepages will take time to load since the about page is loading, this "Blocking the entire server."

*/

const http = require("http");
const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("HOME PAGE");
    }
    else if(req.url === "/about"){
        //Blocking Code
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end("ABOUT PAGE")
    }
    else{
    res.end("ERROR PAGE")
    }
    
})

server.listen(5001, ()=>{
    console.log("Server Listening on PORT: 5001...")
})