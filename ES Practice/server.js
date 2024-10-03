import { cinemaName,cinemaProducer,releaseDate,aboutCinema } from "./cinema.js";
import { studentId,studentName,studentEducationalDetails,aboutStudent } from "./student.js";
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