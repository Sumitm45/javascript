//reduce operation 
const arr=[5,8,13];

/*const newTotal=arr.reduce( (acc,curval)=>{
    return acc+curval;
},0)

console.log(newTotal);*/
/* newt=arr.reduce(function(acc,curval){
    console.log(`acc:${acc} and curval :${curval}`);
    return acc+curval
    
},0)

console.log(newt);*/

/*const teamBudget=[
    {
        playerName:"MSD",
        price:250
    },
    {
       playerName:"klr",
        price:4000 
    },
    {
        playerName:"hp",
        price:30000
    }
]

const tp=teamBudget.reduce( (acc,item)=> acc+item.price,0);
console.log(tp);*/


const shoppingCart=[
    {
        itemName:"mobile",
        price:250000
    },
    {
         itemName:"mobile Backcover",
        price:500
    },
    {
         itemName:"mobile glass",
        price:100
    },
    {
         itemName:"earphone",
        price:1500
    }
]

const cartValue=shoppingCart.reduce( (acc,p)=>{
       return acc+p.price;
},0)


console.log(`Payable value is ${cartValue}`);

