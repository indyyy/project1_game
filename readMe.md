
# ![] Welcome to Tic Tac Toe Project #1
Version Beta 1.7.5.2018

credits: giphy.com for the X's and O's images

### RUN INSTRUCTIONS
< Insert gitHub link over here>

### Technologies Used: 
HTML, CSS, Javascript
GitHub for Version Control

### Approach Taken:
## HTML Layout:
Scoreboard with Player 1 and Player 2 Box
Message Box for Player
3 x 3 boxes with ID's in a gameboard wrapper
Footer with a Reset Button

## CSS:
Tic-Tac-Toe box width is 1/3 size of gameboard
Fixed black border colors and turquoise background
<Not optimized for devices yet>

## JavaScript:
Player 1 is assigned "Blue" color and an "X" Giphy
Player 2 is assigned "Pink" color and an "O" Giphy

Each player takes a turn until there is a "Winner"

"Winner" is through a checkWin() function which uses color to distinguish between players
In checkWin() - 3 winning combinations are checked for a winner
1) Check the ROWS where 3 boxes are the same color (pink or blue)
2) Check the COLUMNS where 3 boxes are the same color (pink or blue)
3) Check the Diagonals(Left and Right) where the boxes are teh same color (pin or blue)
If there is a TIE - the game has ended and RESET to start again

RESET: executes a "Browser Refresh"

## NEXT BETA RELEASE
1) Scoreboard that keeps scores of each player
2) Reset Button that clears the board, starts a new game and keeps track of score
3) Optimized for different size screens
4) Players can customize and  choose colors and giphy
5) scalable board with efficient loops and functions
6) sound effects
7) keeps top 5 player scores of all time












# ![] Project #1: The Game

### Overview

Let's start out with something fun - **a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – Let's start out with something fun - a game! We'll be making **tic tac toe** (knots and crosses). What a nice surprise! But it's up to you to come up with a fun and interesting approach to this classic game. 

**You will be working individually for this project**, but we'll be guiding you along the process and helping you as you go. Show us what you've got!


---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Switch turns** between more than one player
* **Design logic for winning** & **visually display which player won**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** principles
* Use **Javascript** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables


* **Due today** - At least one artefact of either pseudocode, flow diagram, wireframe, mockup or storyboard demonstrating planning - **Due today** 
* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your GitHub repo
* A **git repository hosted on GitHub**, with a link to your hosted game, and **frequent commits** dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Bonus extensions

These are for extra credit! DON'T focus on these until you've hit the core requirements.

* Keep track of multiple game rounds with a win counter
* Allow game customizable options, time limits, board size, game rounds, name & profiles etc  
* Allow players to customize their token (X, O, name, picture, avatar etc)
* Get inventive with your styling - research CSS effects, animations to spiff things up
* **Research** **LocalStorage** or **SessionStorage** to persist data locally to allow games to continue after page refresh or loss of internet connectivity
* Use timers to display "waiting..." messages while users are waiting to be matched
* **Research** web audio API and add sound effects to your game
* Be creative! Bend the rules and give it a twist!


---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, markup, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, debugger, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.


### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[GitHub Pages](https://pages.github.com)** _(for hosting your game)_
* [lol commits](https://lolcommits.github.io/)

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user pseudocode, flow diagram, wireframe, mockup, user stories, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?