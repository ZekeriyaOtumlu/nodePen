const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VacationSchema = new Schema ({
    id: {type: String, required: true},
    name: {type: String, required:true},
    address: {type: String, required:true},
    weather: {type: String, required:true},
    src: {type: String, required:true},
    visited: {type: Boolean, default: true},
    note: {type: Schema.Types.ObjectId,
    ref: "Note"
    }
});

const Vacation = mongoose.model ("Vacation", VacationSchema);

module.exports = Vacation;