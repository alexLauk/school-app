const uuid = require('uuid/v4')
const fs = require('fs')
const path = require('path')

class Lesson {
    constructor (topic, teacher, group, classroom, dateStart, dateEnd) {
        this.topic = topic
        this.teacher = teacher
        this.group = group
        this.classroom = classroom
        this.dateStart = dateStart
        this.dateEnd = dateEnd
        this.id = uuid()
    }

    toJSON() {
        return {
            topic: this.topic,
            teacher: this.teacher,
            group: this.group,
            classroom: this.classroom,
            dateStart: this.dateStart,
            dateEnd: this.dateEnd,
            id: this.id
        }
    }

    async save() {
        const lessons = await Lesson.getAll()
        lessons.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'lessons.json'),
                JSON.stringify(lessons),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static getAll(){
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname,'..', 'data', 'lessons.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
                }

            )
        })

    }
}

module.exports = Lesson
