const express = require('express')

//  const cors = require('cors');


const app = express();
// const server = require('http').createServer(app);


// app.use(cors());

// Configuring body parser middleware

app.use(express.json())
// const WebSocket = require('ws')
// const wss = new WebSocket.Server({ server });

app.get('/api/next',(req, res) => {
    res.send("Please use POST request");
});

app.post('/api/next',(req, res) => {
    res.header("Content-Type", "application/json")
    const isNext = req.body;
    console.log(res)
    res.json(isNext);
});

// wss.on('connection', function connection(ws) {
//   console.log('A new client Connected!');
//   ws.send('Welcome New Client!');

//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);

//     ws.send('Hello World')

//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
    
//   });
// });

app.get('/', (req, res) => res.send('Hello World!'))


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));