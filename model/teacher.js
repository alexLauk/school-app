const {Schema, model} = require('mongoose')

const teacherSchema = new Schema({
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
})

module.exports = model('Teacher', teacherSchema)
