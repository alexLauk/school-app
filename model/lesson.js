const {Schema, model} = require('mongoose')

const lesson = new Schema({
    topic: {
        type: String,
        require: true
    },
    teacher: {
        type: Number,
        require: true
    },
    group: {
        type: String,
        require: true
    },
    classroom: Number,
    dateStart: Date,
    dateEnd: Date
})

module.exports = model('Lesson', lesson)
