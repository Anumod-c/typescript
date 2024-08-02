//In TypeScript, an enum (short for "enumeration") is a special data type that allows you to define a set of named constants. Enums are useful when you want to group related values together and assign them meaningful names. They make your code more readable and maintainable by providing a way to use descriptive names instead of plain numbers or strings.

// Why Use Enums?
// Readability: Enums provide a way to give meaningful names to sets of numeric or string values, making your code easier to understand.
// Maintainability: Enums help avoid "magic numbers" or strings scattered throughout your code, making it easier to refactor and maintain.
// Type Safety: Enums provide type safety, ensuring that only predefined values can be assigned to variables of the enum type.
// Types of Enums in TypeScript
// There are three types of enums in TypeScript:

// Numeric Enums:

// Numeric enums are the most common type of enums. They assign automatic numeric values to enum members, starting from 0 by default, or from a specified value.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
  }
  
  let dir: Direction = Direction.Up;
  console.log(dir); // Output: 0

  enum Direction {
    Up = 1,
    Down,  // 2
    Left,  // 3
    Right  // 4
  }
  

  //String Enums:String enums allow you to assign string values to enum members instead of numbers. This is useful when the exact string values matter and should not change.
  
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }
  
  let dir: Direction = Direction.Left;
  console.log(dir); // Output: "LEFT"


  //Heterogeneous Enums:Heterogeneous enums allow you to mix numeric and string values in the same enum, although it's generally better to stick to one type.

  enum Mixed {
    No = 0,
    Yes = "YES"
  }
  
  let answer: Mixed = Mixed.Yes;
  console.log(answer); // Output: "YES"


  // Using Enums in a Function 
  enum Status {
    Success,
    Error,
    Loading
  }
  
  function checkStatus(status: Status): void {
    if (status === Status.Success) {
      console.log('Operation was successful.');
    } else if (status === Status.Error) {
      console.log('There was an error.');
    } else if (status === Status.Loading) {
      console.log('Loading...');
    }
  }
  
  checkStatus(Status.Loading); // Output: "Loading..."
  