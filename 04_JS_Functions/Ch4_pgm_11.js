// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quiz1;
var quiz2;
var quiz3;
var quiz;
var info;

quiz1 ={
    question1: "which is your favourite movie?",
    Ans2: "(1) harrypotter",
    Ans3: "(2) Megan",
    Ans4: "(3) pi"
}

quiz2 ={
    question1: "Rate the movie of pi?",
    Ans2: "(1) good",
    Ans3: "(2) better",
    Ans4: "(3) best"
}


quiz3 ={
    question1: "which is best movie of all? ",
    Ans2: "(1) movie 1",
    Ans3: "(2) movie 2",
    Ans4: "(3) movie 3"
}




Info = function () {
    console.log("question1 " + quiz.question1);
    console.log("------------------------------");
    console.log("Ans2: " + quiz.Ans2);
    console.log("Ans3: " + quiz.Ans3);
    console.log("Ans4: " + quiz.Ans4)
    console.log("------------------------------");
};

quiz = quiz1;
Info();

quiz = quiz2;
Info();

quiz = quiz3;
Info();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */