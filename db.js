const mongoose = require('mongoose');
const uri = "mongodb+srv://user:user@cluster0.y9ek7.mongodb.net/internship?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//.catch((err)=> console.log(err))
.then(()=>{
    console.log("Connected to Database");
}, (err) => console.log(err))
.catch((err) => console.log(err));