const app = require('express')()
const path = require('path')

app.get("/", (req,res) => res.sendFile(path.join(__dirname, 'public/index.html')))

app.get("/stream", (req,res) =>{
    res.setHeader("Content-Type","text/event-stream");
    res.write("data: These are the events from server\n\n");
    send(res)
})

let i = 0
function send(res){
    res.write("data: " + `Server Event!${i++}\n\n`)
    setTimeout(()=>send(res),2000)
}

app.listen(8080, () => console.log("server started at 8080..."));
