function Program(name, description, days, id) {
    this.name = name
    this.description = description
    this.days = days
    this.id = id
}

Program.prototype.getWorkout = function(name) {
    return this.days.find(this.findByName(name))
}

Program.prototype.getLift = function(workoutName, liftName) {
    return this.getWorkout(workoutName).lifts.find(this.findByName(liftName))
}

Program.prototype.swapWorkouts = function(workout1, workout2) {
    var index1 = this.days.findIndex(this.findByName(workout1))
    var index2 = this.days.findIndex(this.findByName(workout2))

    var temp = this.days[index1]
    this.days[index1] = this.days[index2]
    this.days[index2] = temp
}

Program.prototype.swapLifts = function(workoutName, lift1, lift2) {
    var workout = this.getWorkout(workoutName)
    var index1 = workout.lifts.findIndex(this.findByName(lift1))
    var index2 = workout.lifts.findIndex(this.findByName(lift2))

    var temp = workout.lifts[index1]
    workout.lifts[index1] = workout.lifts[index2]
    workout.lifts[index2] = temp
}

Program.prototype.findByName = function(name) {
    return (element) => {
        return name === element.name
    }
}

Program.prototype.maxSets = function(day) {
    var lifts = this.days[day].lifts

    var max = lifts[0].sets.length
    for (var l in lifts) {
        max = Math.max(max, lifts[l].sets.length)
    }

    return max
}

module.exports = Program