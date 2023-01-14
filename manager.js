import Task from "./task.js"
class Manager{
    constructor(){
        this.tasks = []
    }
    addTask(task)
    {
        this.tasks.push(task)
        this.updateTable()
    }
    removeTask(id){
this.tasks = this.tasks.filter((item)=> item.id != id)
this.updateTable()
}
completeTask(id){
    for(let task of this.tasks){
        if(task.id == id){
            task.completeTask()
        }
    }
this.updateTable()
}
updateTable(){
    let table = document.getElementById("table")
    table.innerHTML = `<tr>
    <th>descripion</th>
    <th>Complete/Incomplete</th>
</tr>`
    for(let task of this.tasks){
        table.innerHTML += `
        <tr>
        <td>${task.description}</td>
        <td>${task.active ? "Incomplete": "Complete"}</td>
        <td><button class="btn btn-success" onclick="window.completeTask(${task.id})"><i class="fa-solid fa-check"></i></button></td>
        <td><button class="btn  btn-danger" onclick="window.removeTask(${task.id})"><i class="fa-solid fa-delete-left"></i></button></td>
        </tr>
        
        `
    }
}
}
let manager = new Manager()
window.completeTask =(id) => {
    manager.completeTask(id)
}
window.removeTask =(id) => {
    if (confirm("Are you sure?")) {
    manager.removeTask(id)
    alert("Task has been removed!");
}
}
window.addTask = () => {
    let taskName = document.getElementById("tasku").value
    document.getElementById("tasku").value = ""
    if(! taskName)return
    let newTask = new Task(taskName)
    manager.addTask(newTask)
}