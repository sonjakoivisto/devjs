window.setTimeout(function() {
    // put all of your JS code from the lecture here
var todos = ["make food"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "list"){
        alert(todos);
    } else if(input === "new"){
        var newTodo = prompt("Enter a to do");
        todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
}

console.log("App quitted")

  }, 500);