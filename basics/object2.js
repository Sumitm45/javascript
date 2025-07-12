//singleton object
const bcci=new Object();
bcci.playrName="Jasprit Bumrah";
bcci.age=29;
bcci.country="India";
bcci.role="Bowler";
bcci.isActive=true;
//console.log(bcci);

const bcci2={
    email:"ro@264.com",
    userName:{
        fullname:{
            firstName:"Rohit",
            lastName:"Sharma"   
        }
    }
    }
    //console.log(bcci2.userName.fullname.firstName);


    let ob1={
        1:"one",
        2:"two"
    }
    let ob2={
        3:"three",
        4:"four"
    }
    const returned=Object.assign({},ob1,ob2);
    //console.log(returned);
//const merged={...ob1,...ob2};
//console.log(merged);


 /*let user3=[
    {
        name:"msd",
        age:44,
        country:"New Zealand",
        isActive:false
    }
    ,
    {
        name:"Raina",
        age:36,
        country:"India",
        isActive:true
    }
    ,
    {
        name:"youraj",
        age:41,
        country:"India",
        isActive:true
    }

]
console.log(user3[1].country);*/
console.log(Object.keys(bcci));
//returns an array of keys
console.log(Object.values(bcci));
//returns an array of values
console.log(Object.entries(bcci));
//returns an array of key-value pairs

console.log(bcci.hasOwnProperty("age"));
//returns true if the object has the specified property

console.log(bcci.hasOwnProperty("height"));
//returns false if the object does not have the specified property

const team={
    name:"CSSK",
    Team_price:1,

    teamCaptain:"Rohit Sharma",
}
const {teamCaptain:captain} = team;
//console.log(teamCaptain);
console.log(captain);
console.log(team);
//returns the value of the property teamCaptain from the team object and assigns it to the variable captain
const{name:pname}=team;
console.log(pname);
//returns the value of the property name from the team object and assigns it to the variable pname