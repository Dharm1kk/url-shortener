const express = require ('express');

const { connectToMongoDB } = require("./routes/connect")
const urlRoute = require('./routes/url')
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('Mongo Connected'))
app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT} `));

app.use(express.json());
app.use("/url", urlRoute);

