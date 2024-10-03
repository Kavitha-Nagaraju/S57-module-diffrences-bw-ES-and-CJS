const{ cinemaName,cinemaProducer,releaseDate,aboutCinema } =require("./cinema.js");
const { studentId,studentName,studentEducationalDetails,aboutStudent }=require("./student.js");
let gameName="cricket";
let teamName="RCB";
let playersNames=["Alzarri Joseph","New Zealand's Lockie","Ferguson","pace-Allrounder Tom Curran","Yash-Dayal"];

let aboutPlayers=()=>{
    console.log("RCB players can play match");
};

console.log(gameName);
console.log(teamName);
console.log(playersNames);
console.log(cinemaName);
console.log(releaseDate);
console.log(cinemaProducer);
console.log(studentId);
console.log(studentName);
console.log(studentEducationalDetails)

aboutPlayers();
aboutCinema();
aboutStudent();