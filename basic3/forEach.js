// for each loop
const arr=["MI","CSK","RCB","DC","LSG"]
arr.forEach(function(item){
   console.log(item);
})
//arr.forEach( (element)=>{
 //console.log(element);
 
//})

//arr.forEach((item,index,arr)=>{
  // console.log(item,index,arr);
   
//})
const myPlayer=[
{playerName:"Hitman",
  bestScore:264
},
{
  playerName:"King Kohli",
  bestScore:183
},
{
  playerName:"Thala",
  bestScore:184
}

]
myPlayer.forEach((item)=>{
  console.log(item.playerName);
  console.log(item.bestScore );
  
  
})