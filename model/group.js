const {Schema, model} = require('mongoose')

const groupSchema = new Schema({
    kodGroup: {
        type: String,
        require: true
    },
    countStudent: {
        type: Number,
        require: true
    },
    yearStart: {
        type: Date,
        require: true
    },
    student: {
        items: [
            {
                satudentId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Student',
                    require: true
                }
            }
        ]
    }
})

module.exports = model('Group', groupSchema)
