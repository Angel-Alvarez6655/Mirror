const mongoose = require('mongoose');
const { Schema } =  mongoose;

const viejasSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    isPelona: {type: Boolean, required: true},
    nationality:{type: String, required: true}
});
module.exports = mongoose.model('viejas', viejasSchema);