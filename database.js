const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:1234@cluster.fuw3l.mongodb.net/test';


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("Facha, si jala"))
.catch( err => console.log("Trono tu chingadera pa pero ta en inglish ira: ", err))

module.exports = mongoose;