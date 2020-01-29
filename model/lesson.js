const {Schema, model} = require('mongoose')

const lesson = new Schema({
    topic: {
        type: String,
        require: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    classroom: Number,
    dateStart: Date,
    dateEnd: Date
})

module.exports = model('Lesson', lesson)
