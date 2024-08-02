//In TypeScript, an enum (short for "enumeration") is a special data type that allows you to define a set of named constants. Enums are useful when you want to group related values together and assign them meaningful names. They make your code more readable and maintainable by providing a way to use descriptive names instead of plain numbers or strings.
// Why Use Enums?
// Readability: Enums provide a way to give meaningful names to sets of numeric or string values, making your code easier to understand.
// Maintainability: Enums help avoid "magic numbers" or strings scattered throughout your code, making it easier to refactor and maintain.
// Type Safety: Enums provide type safety, ensuring that only predefined values can be assigned to variables of the enum type.
// Types of Enums in TypeScript
// There are three types of enums in TypeScript:
// Numeric Enums:
// Numeric enums are the most common type of enums. They assign automatic numeric values to enum members, starting from 0 by default, or from a specified value.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
var dir = Direction.Up;
console.log(dir); // Output: 0
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right"; // 4
})(Direction || (Direction = {}));
//String Enums:String enums allow you to assign string values to enum members instead of numbers. This is useful when the exact string values matter and should not change.
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var dir = Direction.Left;
console.log(dir); // Output: "LEFT"
//Heterogeneous Enums:Heterogeneous enums allow you to mix numeric and string values in the same enum, although it's generally better to stick to one type.
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
var answer = Mixed.Yes;
console.log(answer); // Output: "YES"
// Using Enums in a Function 
var Status;
(function (Status) {
    Status[Status["Success"] = 0] = "Success";
    Status[Status["Error"] = 1] = "Error";
    Status[Status["Loading"] = 2] = "Loading";
})(Status || (Status = {}));
function checkStatus(status) {
    if (status === Status.Success) {
        console.log('Operation was successful.');
    }
    else if (status === Status.Error) {
        console.log('There was an error.');
    }
    else if (status === Status.Loading) {
        console.log('Loading...');
    }
}
checkStatus(Status.Loading); // Output: "Loading..."
