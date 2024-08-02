type UserProperties = {
    name?:string,
    age?:number,
    email:string
    isActive?:boolean
}

function createUser(user:UserProperties):UserProperties{
    return {name:"",email:'',isActive:false,age:43}
}

createUser({name:"anumod",email:"anumod@gmail.com"})