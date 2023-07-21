
// Project basedon Topics: To Do List (Command Line Based)--------------------
// Task: TO DO LIST
// - "new"    - Add a Todo
// - "list"      - List All Todos
// - "delete" - Remove Specific Todo
// - "quit"    - Quit App

// Tips:
// - gonna have a while loop, ask input while is not = to quit, then keep looping
// prompt, the storage of loop will be done using array, empty array at begginning
// to delete, use index with splice method
// =========================

let input = prompt('What would you like to do?')
let toDoList = []

while (input !== "quit") {
    if (input === "new") {
        const newToDo = prompt('What task, would you like to add.')
        toDoList.push(newToDo)
    }
    else if (input === "list") {

        console.log('=========================')
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`)
        }
        console.log('=========================')
    }

    else if (input === "delete") {
        const deleteToDo = parseInt(prompt('Enter number of the todo you want removed!.'))

        if (!deleteToDo) {
            deleteToDo = parseInt(prompt('Invalid input, Enter number of task you want to removed'))
        } else {
            const deleted = toDoList.splice(deleteToDo, 1)
            console.log(`Message: Successfully deleted "${deleted}"`)

            console.log('=========================')
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i}: ${toDoList[i]}`)
            }
            console.log('=========================')
        }
    }

    input = prompt('What would you like to do?')
}


console.log('Done, Exiting TO DO LIST')

// =========================
