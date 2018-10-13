function myForEach(arr, func){
    for(i = 0; i < arr.lenght; i++){
        func(arr[i]);
    }
}
var colors = ["red", "orange", "blue"];

myForEach(colors, function(color){
    console.log(color);
});

Array.prototype.myForEach = fuction(func){
    for(var i = 0; i < this.lenght; i++){
        func(this[i]);
    }
}

var friends = ["Kaisla", "Saara", "Sissi"];

friends.myForEach(function(name){
    console.log("I love" + name);
}
)