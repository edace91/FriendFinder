// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on , etc.
// 

var friendsData	= require('../data/friends.js');
var  paths = require("paths");

// ROUTING
/* A POST routes /api/friends. 
This will be used to handle incoming survey results. 
This route will also be used to handle 
the compatibility logic. */

module.exports = function (app) {
// =============================================================
	
	// API GET Request
	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

// ======================================
	app.post('/api/friends', function (req, res) {
		// Note the code here. Our "server" will respond to requests and 
		// let users know if they have a match or not.
		/* It will do this by sending out the value "true" 
		var newFriend = req.body;
		newFriend.name = newFriend.name.replace(/\s+/g, '').toLowerCase();

		console.log(newFriend);

		friendsData.push(newFriend);

		res.json(newFriend);
		*/

	//Convert each user's results into a simple array of numbers
 	//(ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

	//var userInput = friendsArray.scores.split(" ");
	//for(var i=0; i<userInput.length; i++) { userInput[i] = +userInput[i]; } 

	
	//create an object for the friend match
		var friendMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};

	//content of the user input data
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var userScores 	= userData.scores;
		//Remember to use the absolute value of the differences.
		var totalDifference = 0;

		/*compare the difference between current user's scores against those from other users, 
			question by question. loop through the friends data array of objects to get each friendsData scores*/
		for(var i = 0; i < [friendsData].length-1; i++){
			console.log(friendsData[i].name);
			totalDifference = 0;

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above

			for(var j = 0; j < 10; j++){
				// We calculate the difference between the scores and sum them into the difference
				//Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				//The closest match will be the user with the least amount of difference. 
				if (totalDifference <= friendMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					friendMatch.name = friendsData[i].name;
					friendMatch.photo = friendsData[i].photo;
					friendMatch.matchDifference = totalDifference;
				}
			}
		}
		/*Once you've found the current user's most compatible friend,
 			display the result as a modal pop-up.*/
		friendsData.push(userData);
 		/* The modal should display both the name and picture of the closest match.*/
		res.json(friendMatch);
	});
};

// =============================================================