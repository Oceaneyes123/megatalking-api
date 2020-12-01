const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

app.get('/api/next',(req, res) => {
   
    res.send("Please use POST request");
});

app.post('/api/next',(req, res) => {
    const isNext = req.body;
    res.send(isNext);
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));