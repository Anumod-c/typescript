const  StatusType={
    PENDING : 'pending',
    COMPLETED : 'compelted',
    FAILED : 'failed',
}

 function getStatus(orderId:string,status:keyof typeof StatusType){
    console.log(orderId,'==',StatusType[status])
 }
 getStatus('1234','COMPLETED')

 //keyof Operator  ==>The keyof operator is used to create a union type of the keys of an object type. This means that keyof extracts the keys of an object type and returns them as a union of string literal types.


 type Person = {
    name: string;
    age: number;
    location: string;
  };
  
  // 'keyof Person' creates a union of the keys: 'name' | 'age' | 'location'
  type PersonKeys = keyof Person;
  
  // PersonKeys is now equivalent to 'name' | 'age' | 'location'
  let key: PersonKeys;
  
  key = 'name';     // ✅ Valid
  key = "age";      // ✅ Valid
  key = "location"; // ✅ Valid
  key = "gender";   // ❌ Error: Type '"gender"' is not assignable to type 'PersonKeys'.
  //this alll values for the keys comes thorugh suggestion



  // typeof Operator   The typeof operator in TypeScript is used to obtain the type of a variable or object. This is particularly useful 


  //Type Inference: typeof is often used in combination with keyof and other TypeScript features to infer types and create more flexible, type-safe code.

typescript


  let myString = "Hello, World!";

// 'typeof myString' gives us the type of the variable 'myString', which is 'string'.
type MyStringType = typeof myString;

// Now, 'MyStringType' is equivalent to 'string'
let anotherString: MyStringType = "Another string"; // ✅ Valid

let myNumber = 42;

// 'typeof myNumber' gives us the type of the variable 'myNumber', which is 'number'.
type MyNumberType = typeof myNumber;

// Now, 'MyNumberType' is equivalent to 'number'
let anotherNumber: MyNumberType = 100; // ✅ Valid



//Summary:
//keyof: Creates a union type of the keys of a given object type. It’s useful for creating type-safe access to object properties.
//typeof: Captures the type of a value, allowing you to refer to that type later in the code. It’s especially useful when you want to define types based on existing variables or objects.
//When combined, keyof and typeof can be used to create highly flexible and type-safe code in TypeScript, making it easier to work with complex data structures while ensuring that your code is robust and less prone to errors.