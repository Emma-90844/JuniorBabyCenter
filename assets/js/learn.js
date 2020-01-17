const person = {
    firstName:'steve',
    lastName:'jean',
    hobbies:['music','sports','hike'],
    address:{
        city:'kampala',
        state:'muyenga',
    },
    getBirthYear: function(){
        return 1987 -this.age;
    }
}
 const dob = person.getBirthYear();
 console.log(dob);

//remember to use the keyword once you are in an object 
//an array is konwn to create more than one object
//creating 
const people = [
    {name:'akon',age:30},
    {name:'john', age:23}
];
//as long as its less than the array number
for (let i = 0; i < people.length; i++){
console.log(people[i]);
}

//creating an object literals

let myBook = {
    title:'1991',
    author:'George Orwell',
    pageCount:453
};

let otherBook = {
    title:'A people history',
    author:'howard',
    pageCount:903
};
//creating a function that will handle every console

const getSumma =  function (book){
console.log(`${book.title} by ${book.author}`)
}
getSumma(myBook);
getSumma(otherBook);
//to make a function reuserble you can
//always pass in a differnt argument and call  it in the 
//function






