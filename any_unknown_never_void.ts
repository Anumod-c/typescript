let userName:unknown = "anumod"//data being fetched from API;

const  newValue = userName as string;
newValue.split// here at first we dont know the type of the userName as it is comming from outside ,so here we use 'unknown ' then we can take that value and check its type and then we can convert into thaat type as done above


//never /void

function throwError(message:string):never{ // this doenst return anything sometimes it will be a infinate loop or the code shall be empty like that
    throw new Error(message)
}

function logMessage(messge:string):any{
    console.log('hello world')
}


type User={
    name:string;
    getUserName:(greetings:string)=>string  //this function will return a string
}

const currentObj:User={
    name:"anumod",
    getUserName(greetings){
        return  this.name+""+greetings
    }
}

currentObj.getUserName('hello')


//null
let userNames:string|null= null;

if(userNames){
    console.log('its not null')
}else if(userName===null){
    console.log('its null')
}