/* let i = 1;

while(i < 20){
  console.log("Hello, world");
  i++;
} 

var moviesArray = ["Casablanca", "Star Wars", "Singing in the Rain", "The Wizard of Oz", "Die Hard"];

var i = 0;

while(i < moviesArray.length){
 console.log(moviesArray[i]);
  i++;
}

for(var i = 0; i < moviesArray.length; i++){
  console.log(moviesArray[i]);
}
*/

/*
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

var i = 0

for(var i = 0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i]);
} */

const chelseaInterests = ["Reading", "Learning languages", "Video games", "Animals", "Spooky Things"]
const chelseaFav = ["Video games"]

for (let i = 0; i < chelseaInterests.length; i++ ) {
   if(chelseaInterests[i] === "Video games"){
    console.log(`My absolute favorite interest is: ${chelseaFav}`)
   }
     else{
      console.log(`One of my interests is: ${chelseaInterests[i]}.`);

    }
} 

// console.log(`My absolute favorite interest is: #{chelseaInterests[2]}`)