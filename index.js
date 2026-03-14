const express = require ('express');

const URL = require("./models/url");
const { connectToMongoDB } = require("./connect")
const urlRoute = require('./routes/url')
const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=> console.log('Mongo Connected'))

app.listen(PORT, ()=> console.log(`Server Started at PORT: ${PORT} `));
app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortID", async(req,res)=>{
    const shortID= req.params.shortID;
    const entry = await URL.findOne({});

    if(!entry) return res.status(404).send("URL NOT FOUND");

    res.redirect(entry.redirectURL);
})
