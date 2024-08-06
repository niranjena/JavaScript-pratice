// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));





var cars;
var getcarInfo;
var car1;
var car2;

cars = function (name, position, type, price, rank) {
    return {
        name: name,
        position: position,
        type: type,
        price: price,
        sizeRank: rank
    };
};

getcarInfo = function (car) {
    return car.type.toUpperCase() + ": car " + car.name;
};

car1 = cars("Wagon", 5, "Maruti", 690911, 9);
car2 = cars("verna", 8, "Hyundai", 2460022, 1);

console.log(getcarInfo(car1));
console.log(getcarInfo(car2));


/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */