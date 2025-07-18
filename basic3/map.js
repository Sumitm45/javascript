const arr=[2,4,6,8,10,12];
/*const newarr=arr.map( (num)=>{
    return num+15;
})
console.log(newarr);
const farr=arr.map( (num)=>{
       return num*10;
    
})
console.log(farr);*/

const newarr=arr
            .map( (num)=> num*10)
            .map( (num)=> num+5)
            .filter( (num)=> num>=50 )      
            
            console.log(newarr);
            
