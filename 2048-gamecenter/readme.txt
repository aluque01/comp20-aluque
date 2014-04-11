Game center:

The project will accept submission but not at “/submit”, only through “/adduser”. The site will also display scores on home pay, but not in order. While trying to place scores in order through jade, something went wrong and now the application will not build or load. I rolled back to a previous version, but the files did not change meaning that as soon as I commit the site will break again. This left me no time to implement the “/score” portion of the project, since pushing anything out would break the site. That portion would have been an easy app.get with the response text being the information for that user. The site only had around 50% of the functionality it should have. 

As it stands now, the website is running  version 26 and I cannot get those files back into my computer, so all work gads to be restarted and I don’t think I have the time to finish it even with tokens. 

I have work around 14 to 16 actually coding on this project, and around 4 more reading up on how to do things and doing tutorials.  

The scores and grid are stored in the game manager object. To retrieve the scores one must do “this.score” while inside a game manager function or in the game manager js file. The grid is stored as a custom object with the positions of every tile, there final move, and their value. This could be stored as a JSON array. 

I had to modify the HTML file by adding a script tag that would download jQuery from google. Other than that I just needed to use a $.ajax POST inside the if(this.over) portion of the game_manager.js file. This would send all information straight to the server using type: "POST", url: 'http://fast-temple-2404.herokuapp.com/adduser', and the data as an object. I had to stringily the grid to make it passable through a POST command. 

I collaborated with Brett Gurman 

