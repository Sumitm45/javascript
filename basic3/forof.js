const arr=[25,69,88,35,3654];

for (const ele in arr) {
  console.log(ele);
  
}
const str="Hitman";
for(const s of str){
    console.log(s);
    
}

const map=new Map();
map.set('VK',"Virat Kohli")
map.set('Hitman',"Rohit")
map.set('msd',"Thala")
map.set('klr',"Rahul")
//map is just like object but it will be uniqe
//console.log(map);
for (const [key,value] of map) {
    console.log(`${key}:-${value}`);
    
}
const player={
    p1:"Rohit",
    p2:"Virat"
}
for(let i in player){
console.log(`${i} :- ${player[i]}`);

}
    

//we cant use forof loop on object so we use forin loop