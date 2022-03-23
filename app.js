const express = require('express');
const app = express();
const server =  require('http').createServer(app);
const io = require('socket.io')(server);

app.set('views', './Views');
app.use(express.static('./Views'));

// Using Routes
app.get('/', async(req, res, next) =>{
    try {
        console.log(' This is Get 55');
       return res.render('index.html');
    } catch (error) {
        next(error);
        
    }
});



io.on('connection' , socket =>{
    socket.on('onSendMessage', data => {
        io.sockets.emit('onSendMessage',data);
        
    })
})



// Listning on The Server
server.listen(5000 , ()=>{
    console.log('Server is Open Now ');
});