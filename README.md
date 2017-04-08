# FriendFinder
Fll stack app using Node and Express Servers

## Synopsis

This full-stack site will take in results based on a user survey, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
Using node to build app Express to handle routing.

## Project Structure

### Survey 

  * 10 questions 
  * Each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
  
### NPM Packages  

  * express
  * body-parser
  * path

### html-routes.js

  * A GET Route to /survey displays the survey page.
  * A default USE route that leads to home.html which displays the home page
  
### api-routes.js 
 
 * A GET route with the url /api/friends is used to display a JSON of all possible friends.
 
 * A POST routes /api/friends. is used to handle incoming survey results. This route is also used to handle the compatibility logic.


## Motivation

Create a full stack application. 
