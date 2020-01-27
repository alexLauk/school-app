const path = require('path')
const fs = require('fs')
const uuid = require('uuid/v4')


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'teachers.json'
)
class Teacher {
    constructor (topic, teacher, group, classroom) {
        this.topic = topic
        this.teacher = teacher
        this.group = group
        this.classroom = classroom
        this.id = uuid()
    }


    toJSON() {
        return {
            topic: this.topic,
            teacher: this.teacher,
            group: this.group,
            classroom: this.classroom,
            id: this.id
        }
    }

    async save() {
        const teachers = await Teacher.getAll()
        teachers.push(this.toJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'teachers.json'),
                JSON.stringify(teachers),
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
                path.join(__dirname,'..', 'data', 'teachers.json'),
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

module.exports = Teacher
