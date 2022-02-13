const mongoose = require('mongoose');

const dbConnect = () => {
    // connect DB
mongoose.connect(process.env.MONGODB_URL, 
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
console.log(`Database Connected Connection Successful in MongoDb`);
})
.catch((err) => {
  console.log(`NO Connetion in DB`,err);
})
}

module.exports = dbConnect;