const {Schema, model} = require('mongoose')

const studentSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    lesson: {
        items: [
            {
                lessonId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Lesson',
                    require: true
                }
            }
        ]
    }
    ,groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
})

module.exports = model('Student', studentSchema)
