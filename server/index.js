const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const dataB = 'mongodb+srv://SyncFocus:SyncFocus167.@catalogue.lxqcvrx.mongodb.net/catalogue?retryWrites=true&w=majority&appName=Catalogue'

mongoose.connect(dataB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    appName: 'Catalogue'
  }).then(() => {
    console.log("Connection Successful");
  }).catch((err) => console.log("No connection: ", err));

const db = mongoose.connection

db.on('error',()=>{
    console.log("No such database exizt")
})

db.once('open',()=>{
    console.log('connected to databse')
})

// const collectionName = 'your_collection_name';
//     await db.createCollection('catalogue');
//     console.log(`Collection "${collectionName}" created successfully`)
const app = express();

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(cors())
app.use('/api/catalogue',require('./routes/catalogue'))
app.listen(PORT,()=>{
    console.log("App is listening")
})


