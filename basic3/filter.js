//filter
//foreach doesnt return value


//const arr=[25,30,15,45,89,11,18,17,65]

//const newarr=arr.filter( (num)=> num>20);
//console.log(newarr);

//const nrr=arr.filter( (num)=>{
   // return num>15;
//})
//console.log(nrr);

/*const farr=[];
arr.forEach( (num)=>{
    if(num>10){
        farr.push(num);
    }
})
console.log(farr);*/
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook=books.filter((bkl)=> bkl.genre=='Fiction');
  //console.log(userbook);
  //userbook=books.filter( (bkl)=> bkl.publish>1995);
  //console.log(userbook);
  userbook=books.filter((bkl)=>{
       return bkl.genre=='Non-Fiction' && bkl.publish>1990;
  })
//console.log(userbook);
userbook=books.filter((bkl)=>{
    return bkl.genre=='Science' ;
})
console.log(userbook);
