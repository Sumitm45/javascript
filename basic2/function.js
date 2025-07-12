function add(a,b){
    return a+b;

}
const result=add(2,3);
//console.log(result);
function practise(player="virat"){ //default parameter
    if(!player){      //in javascript, if a variable is not defined, it is undefined and it will be falsy and if  it is empty string, it is also falsy 
        return "Please provide a player name";
    }
   return `${player} is come for practise`;

}
//console.log(practise("rohit"));
//console.log(practise());

//--------------------------------adding element in cart using rest operator-----------------------------------//
 function addTocart(...items){
    return items;
 }
 console.log(addTocart(200,500,700,900));

 //-------------------object destructuring---------------------//
     let user={
        username:"msd",
        price:-500 
     } 
 function handleobject(any){
     console.log(`username is ${any.username} and price is ${any.price}`);

 }
 handleobject(user);
 /*handleobject( {
        username:"msd",
        price:-500 
     } )*/

 //-------------------array in function---------------------//
 const arr=[500,600,700,800];

 function handleArray(anyArray){
    return anyArray[3];
 }
console.log(handleArray(arr));

 


