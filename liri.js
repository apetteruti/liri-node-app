require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var commandLine = process.argv[2]; //variable to take in the command
var input = process.argv[3]; //variable to take in the entry

//write a for loop to take in whatever comes after the command line

// for (var i = 2; i < nodeArgs.length; i++) {

//   if (i > 2 && i < nodeArgs.length) {
//     movieName = movieName + "+" + nodeArgs[i];
//   }
//   else {
//     movieName += nodeArgs[i];

//   }
// }

//Spotify - create a function to collect information from Spotify

  // spotify
  // .search({ type: 'track', query: input, limit: 1 })
  // .then(function(response) {
  //   console.log(response);
  // })
  // .catch(function(err) {
  //   console.log(err);
  // });


//OMDB - create a function to get information from OMDB

var OMDB = function(){
var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
  function (response) {
    console.log("/n-----------MOVIE INFO----------------/n")
    console.log ("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Release IMDB Rating: " + response.data.imdbRating);
    console.log("Release Metascore: " + response.data.Metascore);
    console.log("Release Country: " + response.data.Country);
    console.log("Release Language: " + response.data.Language);
    console.log("Release Plot: " + response.data.Plot);
    console.log("Release Actors: " + response.data.Actors);
  }
);
}

if (commandLine == "movie-this"){
  OMDB();
}
else if (commandLine == "spotify-this-song"){
  Spotify();
}

else if(commandLine == "concert-this"){
  Band()
}

else{
console.log("do what it says");
}

