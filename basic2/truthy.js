//falsy values
//false,0,"",-0,BigInt 0n,null,undefine,Nan

//truthy values
//"0",[],{},function(){},"false",

const arr='';

if(arr){
    console.log("empty array is true value");

}else{
    console.log("false");
}

const empty_Obj={};
if(Object.keys(empty_Obj).length==0) {
    console.log("empty object is true value");
}

let arr2=[];

if(arr2.length==0){
console.log("array is empty");
}

let virat;
virat=183??252
console.log(virat);
virat=null??252
console.log(virat);
virat=null??183??252
console.log(virat);

//ternary operator

//condition?true?false

const bestvirat=183;
bestvirat>100?console.log("virat is greatest"):console.log("virat is not greatest")


//max between three
let num1= 10;
let num2=25;
let num3=35;

let max=(num1>num2)?((num1>num3)?num1:num3):((num2>num3)?num2:num3);
console.log(max);

