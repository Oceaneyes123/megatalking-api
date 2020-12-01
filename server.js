const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())



app.post('/api/next',(req, res) => {
    const isNext = req.body;
    res.send(isNext);
});


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));