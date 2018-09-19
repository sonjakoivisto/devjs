window.setTimeout(function() {
    // put all of your JS code from the lecture here
var todos = ["make food"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "list"){
       listTodos();
    } else if(input === "new"){
        newTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("App quitted")

  }, 500);

  function listTodos(){
    console.log("**********")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    console.log("**********")
    });
  }

  function newTodo(){
    var newTodo = prompt("Enter a to do");
    todos.push(newTodo);
    console.log("Added todo");
  }

  function deleteTodo(){
    var index = prompt("Enter an index of the todo to delete");
    todos.splice(index,1);
    console.log("Deleted todo");
  }