let player={
    name:"virat",
    age:34,
    welcome:function(){
        console.log(`${this.name},is great player`);
            
    }
}

player.welcome();
const player2={
    name:"rohit",
    age:35,
    welcome:() => {
        console.log(`${this.name},is greatest player`);
            
    }
}
player2.welcome();
//difference between arrow function and normal function is that 
// in arrow function this keyword does not refer to the object it is defined in, 
// but rather to the global context or the enclosing lexical scope. 

function one(){
    console.log(this);
}
one(); // In non-strict mode, this will refer to the global object (window in browsers)
let two=()=>{
console.log(this);

}
two();
// In an arrow function, this does not refer to the global object but to the enclosing lexical scope

let vk=(num1,num2)=> num1+num2;
//in arrow function, we can write the function in a single line without using return keyword

console.log(vk(10,20)); // Output: 30
let virat=()=>({username:"thala "});
//if we want to return an object from an arrow function, we need to wrap the object in parentheses  
console.log(virat()); // Output: { username: 'thala ' }

