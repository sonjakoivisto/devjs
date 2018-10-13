var movies = [
{
    title: "Intouchables",
    rating: 5,
    hasWatched: true
},
{
    title: "Pikitie",
    rating: 2,
    hasWatched: false
},
{
    title: "Skyfall",
    rating: 3.5,
    hasWatched: true
},
{
    title: "Minions movie",
    rating: 3,
    hasWatched: false
}
];

/*function movie(movies){
    for(var i = 0; i < movies.lenght; i++){
        if(hasWatched === true){
            "You have watched" + movie.title + "- " + movie.rating + " stars"
        }
        "You haven't watched" + movie.title + "- " + movie.rating + " stars"
    }
}*/
movies.forEach(function(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});