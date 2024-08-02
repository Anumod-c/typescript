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

// type StatusType='pending' |'completed'|'failed';
// type ToggleSwitch = 'on' | 'off';
// let toggleSwitch : ToggleSwitch='off'
// toggleSwitch='on'

// let currentStatus :StatusType="pending"
// if(currentStatus=='pending')
// {
//   currentStatus='completed'
// }

// all the above string like pending and completed in if condtion  comes throug so there is 0 change more making spelling mistake and it also give a drop down list so that  we can select from the custom type we made

//===========================================================

//part 2
// function overloading
// here the same funtion is used with string and number ,so + operator will get into error when checking the string case so we have to put an additonal conditon to handle the case of string . Here it is done by adding a if condition and checking if one of it  is a string ,  if its string then it will concate and return the resulted string

function add(num1:number|string,num2:number|string):string|number{
  if(typeof num1=='string' || typeof num2=='string'){
    return num1 + '' + num2
  }
  
  return num1+num2
}

add(2,2)//4
add("2","2") //22

// But this case is not a good apprach because we alreduy put a lot of code  and repeated many code which made it messy 

//to handle this we do function overloading
// we use "any" here to do this
// if we use any ts will loose it powers and it will act like plain js

 function sub(num1:any,num2:any):any{
 return num1-num2
 }
sub(2,2);
sub("2","2")
sub({},[])
// here it still dont know that if the type is string then it should give string as output . so we have to mention it

function addition(num1:number,num2:number):number;
function addition(num1:string,num2:string):string;
function addition(num1:any,num2:any){
  return num1+num2
}
addition(2,2);
addition("2","3")
// in this case even though we use any, but still it can only use string and number because we  speciefied it abovee(overloading)

//still it is not  a good approach






// for overcomming the above issue we have Generic in typescript

//Generics

function getAge(age:string |number):string|number{
  return age
}

getAge(23);
getAge("43")

//the same code can be writtern in Generic  mentioned below
//code which have <> is called generic
// the below T is a varaible which we decalre  to mention types and this type is mentione in other place


function getSalary<T>(salary:T):T{
  return salary
}
getSalary(399999)
getSalary("399999")

// here what happend is ts automatically take the type whicj we pass as argument . we can se this if we hover on tp of fuction call then we can see the type of the data which we pass



// if we want  to tell that in funciton call area and not depend on the ts then we have to use the generic symbol in function call area
//Eg==> getAge<string>("2");    getAge:<number>(5)





// type TutorDetail={
//   name:string;
//   age:number
// }
// type Admin={
//   firstname:string;
//   role:string
// }

// const tutorDetail={
//   name:"Instructro",
//   age:34
// }

// const admin={
//   firstname:"john Doe",
//   role:"admin"
// }

// function getDetails<T>(details:T):T{
//   return details;
// }
// const tutorvalue = getDetails<TutorDetail>(tutorDetail)
// const adminvalue = getDetails<Admin>(admin)

// tutorDetail.age;
// admin.firstname;

// All this came by suggetion because we used generic
// so whats happening here is we created 2 obj named tutordetail and admin and also created 2 type called TutorDetails and Admin . Here we only have one functio to return the details of both the obj but both have differetn key with differnt type  so we only can overoad or  use generic and we used generic here so in the function call of tutor i mentioned that the type of getDetails is TutorDetails and this is recieved in the fumction definiton by <T> so this T will take TutorDetails and only return things related to it  and in antother function call i mentioned type as Admin so <T> will take Admin as  its type




// take the case of this below  object

// typeTutorDetails={
//   nameL:"Anumod",
//   age:23,
// }

// type Admin={
//   name:"John",
//   age:44,
//   role:"admin"
// }
//you can see that here both the admin and the tutor have nama and age same only the extra role fied is  extra in  admin, so this name and age are repeating and we can avoid this repeatition in ts

//we can overcome by the below  method

type TutorDetail={
  name:string;
  age:number
}
type Admin=TutorDetail&{  
  role:string
}
const tutorDetails={
  name:"Anumod",
  age:23,
}

const admin={
  name:"John",
  age:44,
  role:"admin"
}

//this is how we do using  type 
// if we want to do the same thing using interface  
// interface Admin extends TurorDetail{
//}

//if we dont want to add and extra field but we need all the things used in Tutor then we can simple do 
// type Admin = TutorDetails 

//as simple as that . But  if we want to achive this in interface then we have to do
// interface Admin extends TutorDetail {}








