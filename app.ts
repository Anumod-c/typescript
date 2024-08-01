//infer types(implicit types)==>   canot change the types after initailising ;
// if a varaibel is delared as string then it canot asidn a nuber value

// let username = 'anumod';
// username = 39;
// console.log(username);


// defining types (explicit types)

let username :string =  "anumod";

let age: number = 23;

let isVerified: boolean = true;

let skills : string[] = ['node','js']

let mark : number[] = [98,98,98];

let userDetail:{name:string,age:number,isverified:boolean}={
  name:"Anumod",
  age:23,
  isverified:true
}


//==============================

//interface ==> if we have to create a similar obect with same key value pair we have to hard code the data once again. so inorder to resolve this issue ts gives us to feature called interface and types


//here we give a structure at the begining inside the interface and this interface should also have a name so below is my interface name "Details" ==> note interface names fitst letter should be capital letter

//
 interface Details{
  name:string;
  age:number;
  isverified:boolean;
  getName:()=>void;
 }

 let myDetails: Details ={
  name: "anumod",
  age:23,
  isverified:true,
  getName(){
    console.log(this.name);
    
  }

 }

 //now if  want to add another varible with this key value then we only need to use the interface Details


 let adminDetails:Details={
  name:"admin",
  age: 33,
  isverified:false,
  getName(){
    console.log(this.name);
    
  }
 }
 
 //=======================



 

 //second apprach=====> Types

//  interface Details{
//   name:string;
//   age:number;                         first approach= interface , here  after intreface name we are directly opening the curly bracket
//   isverified:boolean;
//   getName:()=>void;
//  }
//  type NewDetails = {
//   name:string;
//     age:number; 
//     isVerfied:boolean;                      //  second approach= type , here  after type name we are writing q = operator and after that opening the curly bracket
//     getName:()=>void;
//  }


//  let typeDetails:NewDetails = {
//   name:'type_detail_name',
//   age:55,
//   isVerfied:false,
//   getName() {
//       console.log(this.name);
      
//   },
//  }






 //Union Type and Optional Type



 // if there is a situation where we want the age as string as well as number then we can use this. it act as 'OR' operator 
 //  it is represented by a single | not double || like in js


let unionObject: {
  name: string; age: string|number; isVerfied: boolean;
}={
  name:"anumod",
  age:'23', //here age is string . note that it can also be a number
  isVerfied:false
}
//example with array having multiple datatype
let unionArray:(string | number | boolean)[]= [21,32,'helllo',false]  //====>  we have to put a paranthesis and inside that we have to specify the type  and outside the  paranthesis mention the array or object or whatever it  is



//optional  ==> this is used when we have declared the type and all but we dont want to use it. consieder the case of the fuction getName . so if we dont want to use that then we can add a .? like the optional chaining in js
let optionalObj:{name:string; age:number;getName?:()=> void}={
  name:"optional",
  age:22,
//ist wont show any warning even though we dont use the getName method 
}



let def: (string|number)[]= ["hello","df",67]





//Functions

type NewDetails = {
  name:string;
    age:number|string; 
    isVerified:boolean;                     
   
 }

let typeDetails:NewDetails = {
  name:'type_detail_name',
  age:55,
  isVerified:false,
  
 }
 function getUserName(typeDetails:NewDetails, adminDetails:Details){
  return  typeDetails.age
 }

getUserName(typeDetails,adminDetails)

//how to do a  pass a object witout using the interaface or type

//  function noramlFunction({name,age,isVerified,phone}:{name:string,age:number,isVerified:string,phone?:number}){
//   return name
//  }
//  noramlFunction({name:'anumod',age:23,isVerified:'yes'})







// mentioning the return type by putting a colon and the retutn type between the paranthesis and curly bracket
function returnType(typeDetails:NewDetails):string{
return typeDetails.name
}
let result=returnType(typeDetails);
//eg ==>result.

//if we put the retunrn type  the advantage is that if we are asigning the returnTypeFunction(typeDetails) to a variable and if we put a dot after that varible then  we will get plenty of suggestion regarding the type we mentioned ie if we write the type as string then  the suggestion will be full of string methods


//void

// if we are not returining any thing then in the place where we mentioned the return type , there we can mention void


//Instead of the string nubmer or booleand or void we can also mention the custom build interface and type in the return type




//named type or custom types

type StatusType='pending' |'completed'|'failed';
type ToggleSwitch = 'on' | 'off';
let toggleSwitch : ToggleSwitch='off'
toggleSwitch='on'

let currentStatus :StatusType="pending"
if(currentStatus=='pending')
{
  currentStatus='completed'
}

/// all the above string like pending and completed in if condtion  comes throug so there is 0 change more making spelling mistake and it also give a drop down list so that  we can select from the custom type we made