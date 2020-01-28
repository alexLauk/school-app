const {Schema, model} = require('mongoose')

const lesson = new Schema({
    topic: {
        type: String,
        require: true
    },
    teacherName: {
        type: String,
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
