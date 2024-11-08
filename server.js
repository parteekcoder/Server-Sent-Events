const app = require('express')()
const path = require('path')

app.get("/", (req,res) => res.sendFile(path.join(__dirname, 'public/index.html')))

app.get("/stream", (req,res) =>{
    res.setHeader("Content-Type","text/event-stream");
    res.write("data: These are the events from server\n\n");
    setTimeout(() => sendLoginEvent(res), 1000)
    setTimeout(()=>  sendNotificationEvent(res),1500)
    setTimeout(()=>  sendMessage(res),2000)
    setTimeout(()=>  sendLogoutEvent(res),3000)
})

function sendLoginEvent(res){
    res.write("event: Login\n")
    res.write("data: user loggedin\n\n" )
}
function sendMessage(res){
    res.write("data: Hi this server sent event\n\n" )
}

function sendNotificationEvent(res){
    res.write("event: Notify\n")
    res.write("data: Notification\n\n" )
}
function sendLogoutEvent(res){
    res.write("event: Logout\n")
    res.write("data: user logged out\n\n" )
}

app.listen(8080, () => console.log("server started at 8080..."));