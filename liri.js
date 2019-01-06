require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var moment = require('moment');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var commandLine = process.argv[2]; //variable to take in the command
var firstInput = process.argv; //variable to take in whatever is entered after the command
var array = []; //create an array from the firstInput so that it can be separated out into a word

//for loop to interate through the firstInput and then push all the words into an array
if (firstInput.length > 3) {

  for (var i = 3; i < firstInput.length; i++) {
    array.push(firstInput[i]);
  }
}

var finalInput = array.join(" ");
// console.log(array);
// console.log(finalInput);


//Spotify - create a function to collect information from Spotify
var Spotify = function () {

  if(finalInput === ""){
    finalInput = "The Sign Ace of Base";
  }

  spotify
    .search({
      type: 'track',
      query: finalInput,
      limit: 1
    })
    .then(function (response) {
      // console.log(response);
      // console.log(response.tracks.items);
      console.log("\n")
      console.log("\n-----------SONG INFO----------------\n")
      for (var i = 0; i < response.tracks.items.length; i++) {
        // console.log(response.tracks.items[i].album);
        for (var j = 0; j < response.tracks.items[i].artists.length; j++)
        console.log("Artist: " + response.tracks.items[i].artists[j].name); //Artist name
        console.log("Song name: " + response.tracks.items[i].name);//Song name
        console.log("Preview of Song: " + response.tracks.items[i].preview_url);//Preview of song
        console.log("Album name: " + response.tracks.items[i].album.name);//Album name      
      }
    })
    .catch(function (err) {
      console.log(err);
    });

}

//OMDB - create a function to get information from OMDB

var OMDB = function () {
  if(finalInput===''){
    finalInput = "Mr. Nobody";
  }
  var queryOMDB = "http://www.omdbapi.com/?t=" + finalInput + "&y=&plot=short&apikey=trilogy";

  // console.log(queryOMDB);

  axios.get(queryOMDB).then(
    function (response) {
      console.log("\n")
      console.log("/n-----------MOVIE INFO----------------\n")
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("Metascore: " + response.data.Metascore);
      console.log("Country: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
    }
  );
}

var bandsInTown = function () {
  var queryBand = "https://rest.bandsintown.com/artists/" + finalInput + "/events?app_id=codingbootcamp&limit=1";
  console.log(queryBand);

  axios.get(queryBand).then(
    function (response) {
      // console.log(response);
      for (var i = 0; i < response.data.length; i++) {
        console.log("\n-----------CONCERT INFO----------------\n")
        console.log("Venue: " + response.data[i].venue.name);
        console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
        var dateDisplay = response.data[i].datetime
        console.log("Date: " + moment(dateDisplay).format("MM/YYYY"));
      }
    }
  )
}

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

if (commandLine == "movie-this") {
  OMDB();
} else if (commandLine == "spotify-this-song") {
  Spotify();
} else if (commandLine == "concert-this") {
  bandsInTown()
} else if (commandLine == "do-what-it-says") {
  console.log("do what it says");
}