// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

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

movie4 = {
  title: "Megan",
  actors: "Don't know",
  directors: "J.J.Abrams"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log("------------------------------");

Event1 = {
  Date: "7th june",
  day: "Friday",
  place: "theni"
};
Event2 = {
  Date: "19th august",
  day: "saturday",
  place: "ooty"
};
Event3= {
  Date: "28th october",
  day: "thursday",
  place: "coimbatore"
};


console.log("Event date :" + Event1.Date);
console.log("------------------------------");
console.log("day: " + Event1.day);
console.log("place: " + Event1.place);
console.log("------------------------------");

console.log("Event date " + Event2.Date);
console.log("------------------------------");
console.log("day: " + Event2.day);
console.log("place: " + Event2.place);
console.log("------------------------------");

console.log("Event date " + Event3.Date);
console.log("------------------------------");
console.log("day: " + Event3.day);
console.log("place: " + Event3.place);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */