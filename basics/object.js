let newsym=Symbol("aggressive")
let cricketers={
    name:"virat",
    "Full name":"virat kohli",
    [newsym]:"aggressive",
    age:36,
    country:"India",
    team:"Rcb",
    runs:28000

}
console.log(cricketers.age); // 36 //normally we use these keys to access object properties
console.log(cricketers["runs"]);    //butwe use this syntax to access properties with spaces or symbols
// 28000
console.log(cricketers["Full name"]);
// virat kohli
console.log(cricketers[newsym]);
// aggressive
console.log(typeof cricketers[newsym]); // symbol
console.log(typeof cricketers["runs"]); // number

cricketers.country="england";
console.log(cricketers.country); // england 
//Object.freeze(cricketers);l
//console.log(cricketers); // { name: 'virat', 'Full name': 'virat kohli', [Symbol(aggressive)]: 'aggressive', age: 36, country: 'england', team: 'Rcb', runs: 28000 }
cricketers.greeting=function(){
    console.log("Hello i am virat kohli");

}
console.log(cricketers.greeting); // undefined
console.log(cricketers.greeting()); // Hello i am virat kohli
cricketers.greeting2=function(){
    console.log(`my age is${this.age} and i am from  ${this.country}`);

}
console.log(cricketers.greeting2()); // my age is 36 and i am from  england
console.log(cricketers );


