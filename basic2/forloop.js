for (let i = 0; i < 10; i++) {
    const element=i;
    if(element==5){
        console.log("5 is best");
        break;
    }
    console.log(i);
    
}

for(let i=1;i<=5;i++){
    console.log(`outer loop is ${i}`)
    for (let j = 1; j <=10; j++) {
        let num=i*j
        console.log(`${i}*${j}=${num}`);
        
    }
}
const array=["rohit","virat","MSD","KLR"];
for(let i=0;i<array.length;i++){
    const element=array[i];
    console.log(element);
    
}