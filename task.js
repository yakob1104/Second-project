export default class Task {
    constructor(description){
        this.id = randomid()
    this.description = description
    this.active = true

}
completeTask(){
    this.active = false
}
}
function randomid(){
    return Math.floor(Math.random() * 10000)
}