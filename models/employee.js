const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: { type: String, required: false },
    position: { type: String, required: false },
    office: { type: String, required: false },
    salary: { type: Number, required: false },
});

module.exports = mongoose.model('Employee', employeeSchema);
