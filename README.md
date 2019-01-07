# liri-node-app

#Introduction
The liri-node-app returns concert information from actively touring artists, artist information for specified songs, and movie information for specified movies. Below is a detailed description of how each component of the application works. 

##Using the Application
In order to use this application, you must enter the following in your command line in Git to access the requisite information:

- Spotify (song information): node.liri.js spotify-this-song <song title here>
- OMBD (movie information): node.liri.js movie-this <movie name here>
- Bands In Town (concert information): node.liri.js concert-this <artist name here>
- Do What It Says (automatic information return): node.liri.js do-what-it-says

##Establishing variables
The application establishes two variables:

*commandLine* - Collects one of the following user-entered directions 1) concert-this, 2) spotify-this-song, or 3) movie-this. The user has to enter one of these commands to return a response.

*firstInput* - Collects an artist for concert info, a song for Spotify, or a movie. Inputs can have multiple words.

*finalInput* - Data from firstInput is fed to a "for loop" so that it can be pushed into an Array and then concatenated into a single phrase that is saved as finalInput that can be sent to the appropriate API. This allows users to search for songs, movies, or artists with multiple words in their titles or names.

##Spotify

The Spotify function establishes a connection with Spotify to return artist name, song name, album name, and a url for a preview of the song when the user enters a song name. Spotify required two "for loops" to navigate to the required properties. The finalInput variable is fed to Spotify to return the information.

If the user does not enter a song, then the application will return "The Sign" by Ace of Base.

*Demonstration Screenshot* - https://docs.google.com/document/d/1mgsffHXCn4TvNmoeSj_UpJu0wlwmaGwcbrg29Z6NBzI/edit?usp=sharing

##OMDB

The OMDB function estabilishes a connection with the Online Movie Database to return movie title, year, IMDB Rating, Rotten Tomatoes (Metascore) rating, country, language, plot, and actors when a user enters a movie name. 

If the user does not enter a movie name, then the application will return "Mr. Nobody" information.

*Demonstration Screenshot* - https://docs.google.com/document/d/1hMpoGDahaTUNgSnRXluJO6HlKEOuyJ0m86XxrjZrWNc/edit?usp=sharing

##BandsInTown

The bandsInTown doWhatItSays function establishes a connection with the Bands In Town API to return venue name, venue city and state, and date of the concert when a user enters an arist name. The npm package, Moment, establishes a format for the date so that it appears as MM/YYYY.

If the user does not enter an artist's name, the application will return concert information for Lyle Lovett.

*Demonstration Screenshot* - https://docs.google.com/document/d/1pgzp-F1CstKGfAaAfdauMUOP4QKs2-egveFZBMx5IY8/edit?usp=sharing
*Demonstration Screenshot (BLANK ENTRY)* - <<There are no specific instructions for what to do with blank errors for Bands In Town, so I logged Lyle Lovett>>

##doWhatItSays
The doWhatItSays function will automatically send the command line and input from the random.txt file through the attendant function. For example, spotify-this-song in the text file will automatically run the song that is also in the file. 

*Demonstration Screenshot (includes OMDB and Spotify)* - https://docs.google.com/document/d/1IqsknsLhuMa6X7b5cigL6Rtp_0l4tJ541b9f4kcGzU0/edit?usp=sharing

****At the time of this edit, concert-this is throwing an error for the doWhatItSays function****

##Final Note
Switch case switches between the different types of command lines to run the appropriate and matching function.