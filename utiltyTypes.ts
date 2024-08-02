type User={
    name:string,
   readonly age:number //work as same as 'as const'  but we can specify for  just one value also
}
const user:User={
    name: "anumod",
    age:23
}

user.name='pramod';
// user.age=33  will show warining that it is readonly

//we dont need to put readonly in every line we can do in other way

//readonly is a generic tyope so if we want to use that in common then we should use the generic sign


//eg

type Admin={
    name:string;
    age:number;
}
// const admin: Readonly <Admin>={
//     name:'adminName',
//     age:23
// }


//we have learned that if we put ? then it act as optiopnal but like readonly we dont neccessarily want put that q mark every where instead we can do the following

// const admin: Partial <Admin>={
//     name:'adminName',
//     age:23
// }     if  u clear this and type cntl + spacebar then we can see the suggestion along with the q mark




//In TypeScript, Pick and Omit are utility types that allow you to create new types by selecting or excluding specific properties from existing types. These utility types are particularly useful when you want to work with a subset of an object's properties in a type-safe way.


//1. Pick Utility Type
// T
// The first argument is the type from which you want to pick properties.
// The second argument is a union of keys that you want to include in the new tyhe Pick utility type allows you to create a new type by selecting a set of properties from an existing type. It takes two arguments:
// Pick: Creates a new type by selecting specific properties from an existing type.


interface Person {
    name: string;
    age: number;
    location: string;
    email: string;
  }
  
  // Create a new type that only includes 'name' and 'email' properties
  type ContactInfo = Pick<Person, 'name' | 'email'>;
  
  const contact: ContactInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    // age: 30,       // ❌ Error: 'age' is not allowed in 'ContactInfo'
    // location: "NY" // ❌ Error: 'location' is not allowed in 'ContactInfo'
  };
  



  //Omit Utility Type
// The Omit utility type allows you to create a new type by excluding a set of properties from an existing type. It takes two arguments:

// The first argument is the type from which you want to omit properties.
// The second argument is a union of keys that you want to exclude from the new type.
//Omit: Creates a new type by excluding specific properties from an existing type





// Syntax:




interface Person {
    name: string;
    age: number;
    location: string;
    email: string;
  }
  
  // Create a new type that excludes the 'age' and 'location' properties
  type BasicInfo = Omit<Person, 'age' | 'location'>;
  
  const basic: BasicInfo = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    // age: 25,          // ❌ Error: 'age' is not allowed in 'BasicInfo'
    // location: "CA"    // ❌ Error: 'location' is not allowed in 'BasicInfo'
  };
  



 // Combining Pick and Omit:
//You can combine Pick and Omit to create complex types.


interface Person {
    name: string;
    age: number;
    location: string;
    email: string;
    phone: string;
  }
  
  // Pick 'name' and 'email', then omit 'phone'
  type ContactInfoWithoutPhone = Omit<Pick<Person, 'name' | 'email' | 'phone'>, 'phone'>;
  
  const contact: ContactInfoWithoutPhone = {
    name: "John Doe",
    email: "john.doe@example.com",
    // phone: "123-456-7890", // ❌ Error: 'phone' is not allowed in 'ContactInfoWithoutPhone'
  };
  


  //In the case of union like
  type StatusType = 'pending' |'completed' | 'failed'
  //here if want to omit one from this we cant use 'omit' instead we use 'exclude'


  const status :Exclude<StatusType,'pending'> = 'completed'

  //here pending will not be suggested in alsong with completed and failed




  //record

//   type Food={
//     KFC:string;
//     CHICKEN:string;
//     PIZZA:string;
//   }
// if we dont know what all are there in Food  and we only need some particular things then we can take that by the below code . here the key is string and the value can be of any type and if we only want value as string then instead of any we can mention string

  type Food= Record<string,any>;

  const food :Food={
    KFC:'AFC',
    CHICKEN :'thandoori',
    PRICE: 5000 //if the any is changed to strin then this will show  error
  }


  //another method for using keys dynamic

  type Foods={
    [index:string]:string
  }
///////////////////////////////
  type Role = 'admin'|'user'|'guest';
  type userPermsission = Record<Role ,boolean>;
  
const permission :userPermsission={
    admin:false,
    guest:false,
    user:false,
}
  

type Persons ={
    name:string;
    age:number;
}

type People = Record <string,Persons>;
const people :People={
    alice:{name:"Alice",age:25},
    bob:{name:"Bob",age:30}
}
//In this example:

//The People type is a Record that maps string keys to Person objects.
//This allows for any number of people to be added to the people object, with each key being a string and each value being a Person.

// Use Cases for Record:
// Dynamic Key-Value Mappings:

// When you want to define an object with dynamic keys but consistent value types.
// Example: Storing configurations where keys are dynamically defined but values have a consistent type.