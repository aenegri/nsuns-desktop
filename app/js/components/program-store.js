const Datastore = require('nedb')

const Program = require('./program')

class ProgramStore {
    constructor() {
        this.programs = new Datastore({ filename: 'programs.db', autoload: true})
    }

    add(program) {
        this.programs.insert(program, (err, doc) => {
            if (err) console.log(err)
        })
    }

    find(conditions, cb) {
        this.programs.find(conditions, (err, docs) => {
            if (err) console.log(err)

            var list = new Array()
            docs.forEach((d) => {
                var name = d.name
                var description = d.description
                var days = d.days
                var id = d.id
                list.push(new Program(name, description, days, id))
            })
            cb(list)
        })
    }

    findOne(conditions, cb) {
        this.programs.findOne(conditions, (err, doc) => {
            if (err) console.log(err)

            var name = doc.name
            var description = doc.description
            var days = doc.days
            var id = doc.id

            cb(new Program(name, description, days, id))
        })
    }
}
