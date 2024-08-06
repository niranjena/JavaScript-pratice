// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };

for (var i = -20; i <= 60; i += 10) {
    console.log(`line(${i}):`, line(i));
}

// Define the spaces function
var spaces = function (spaceLength) {
    var spaceLine = "                                        "; // 40 spaces
    spaceLength = Math.max(0, spaceLength);   // Ensure spaceLength is at least 0
    spaceLength = Math.min(40, spaceLength);  // Ensure spaceLength is at most 40
    return spaceLine.substr(0, spaceLength);  // Returns a substring of the specified length
};



// Define the emptyBox function
var emptyBox = function (width) {
    // Ensure width is between 0 and 40
    width = Math.max(2, Math.min(40, width)); // Minimum width should be 2 for the box sides
    console.log(line(width)); // Top border
    for (var i = 0; i < 3; i++) {
        console.log("=" + spaces(width - 2) + "="); // Middle empty lines
    }
    console.log(line(width)); // Bottom border
};

emptyBox(12); // Draws a box with width 12


// Test the emptyBox function with various widths
for (var j = 2; j <= 50; j += 5) {
    console.log(`Empty box with width ${j}:`);
    emptyBox(j);
    console.log();
}




















  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */