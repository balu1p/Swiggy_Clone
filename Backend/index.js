const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());
mongoose
  .connect(
    "mongodb+srv://balupatil4815:2PwhgkJT0PMf2vz6@cluster0.k0hovrt.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

  app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http:localhost:1234");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
  app.get('/', (req, res)=>{
    res.send("Hello World")
})
app.use(express.json());
app.use('/api', require('./Routes/createUser'));


app.listen(port,()=>{
    console.log(`port running at ${port}`)
})