// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(24,7);

var showLarger = function (num1, num2){
    var smaller = Math.min(num1,num2);
    var larger = Math.max(num1,num2);

    console.log(larger + " is larger than "+ smaller);
}

showLarger(8,9);
showLarger(10,90);
showLarger(400,900);
/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */