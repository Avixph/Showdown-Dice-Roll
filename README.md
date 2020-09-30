## Dungeon Showdown!

![](images/dungeon.png)

This is a simple JS dice roll game where you name a hero and monster then have them fight until either until one or both perish.

- Create a `week-2-project` folder, create a file called `showDown.js` in the `week-2-project` folder.
- Create an `index.html` file, change the `src` or the JavaScript to `showDown.js`.
- Define a function called `fight`. It doesn't need to take any parameters.
- Use `prompt()` to ask the user the name of the monster they're fighting. Save it to a variable called `monster`.
- Do the same with the hero's name and save it to a variable called `hero`.
- Create variables for `villainHealth` and `heroHealth`. Set them both to `50`.
- Using a `while` loop, have the hero and villain attack each other in rounds until one of them has a health at or below 0.
- Using `Math.random()`, generate a random number between 1 and 20 to represent the hero's dice roll. Save that number to a variable.
- Do the same for the monster.
- To decide if the hero and monster hit each other and for how much damage, using the following criteria:
  - If an attacker rolls a 1 or 2, they accidentally stab themselves for 5 damage.
  - If an attacker rolls between 3 and 10, they miss and do 0 damage.
  - If an attacker rolls between 11 and 18, they hit and do 10 damage.
  - If an attacker rolls a 19 or 20, they get a critical hit and do 20 damage.
- Use `alert()` with string interpolation after each attack to inform the user what happened and how much of each fighter's health remains.
- Continue the battle until one of the fighters' health has been reduced to zero. When this happens, use string interpolation to declare the winner and loser by name.
- Bonus: Add an additional condition in case they kill each other on the final blow!
- Below your newly defined function, invoke `fight()`.
- Go to the browser and run the file you just created.

BONUS

- After each battle, ask if the user if they'd like to play again.
- If they answer "yes" restart the game,
- If they type "no", thank them for playing and end the game.
- If they type anything else, ask them again.

The end result should look something like this:

```
Name your hero:
John Wick

Name the monster:
Scar

Hit! John Wick strikes Scar!
Critical failure! Scar accidentally stabs self!
John Wick has 50 hitpoints left. Scar has 35 hitpoints left.

John Wick misses!
Hit! Scar strikes John Wick!
John Wick has 40 hitpoints left. Scar has 35 hitpoints left.

Hit! John Wick strikes Scar!
Hit! Scar strikes John Wick!
John Wick has 30 hitpoints left. Scar has 25 hitpoints left.

Critical hit! John Wick does double damage!
Hit! Scar strikes John Wick!
John Wick has 20 hitpoints left. Scar has 5 hitpoints left.

Hit! John Wick strikes Scar!
Hit! Hungover Scar strikes John Wick!
John Wick has 10 hitpoints left. Scar has -5 hitpoints left.

Scar has lost to John Wick. The world is safe!
```
