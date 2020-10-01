{
  document.getElementById("startButton").addEventListener(
    "click",
    function () {
      document.getElementById("start").hidden = true;
      document.getElementById("battle").hidden = false;
    },
    false
  );

  function retreat() {
    const response = prompt("Venture further?");
    switch (true) {
      case response === "yes":
        fight();
        break;
      case response === "no":
        document.getElementById("returnButton").addEventListener(
          "click",
          function () {
            document.getElementById("battle").hidden = true;
            document.getElementById("start").hidden = false;
          },
          false
        );
        break;
      default:
        retreat();
        break;
    }
  }

  function fight() {
    const heroName = prompt("Indentify your hero:");
    const monsterName = prompt("Indentify the monster:");

    let heroHealth = 50;
    let monsterHealth = 50;

    while (heroHealth > 0 || monsterHealth > 0) {
      let heroDiceRoll = Math.floor(Math.random() * 20) + 1;
      let monsterDiceRoll = Math.floor(Math.random() * 20) + 1;

      if (heroDiceRoll > 18 && heroDiceRoll <= 20) {
        alert(`Critical hit! ${heroName}'s attack did double damage!`);
        monsterHealth -= 20;
      } else if (heroDiceRoll > 10 && heroDiceRoll <= 18) {
        alert(`Hit! ${heroName} strikes ${monsterName}!`);
        monsterHealth -= 10;
      } else if (heroDiceRoll > 2 && heroDiceRoll <= 10) {
        alert(`miss! ${heroName}'s attack did no damage.`);
      } else {
        alert(`Critical miss! ${heroName} accidentally stabed self!`);
        heroHealth -= 5;
      }

      if (monsterDiceRoll > 18 && monsterDiceRoll <= 20) {
        alert(`Critical hit! ${monsterName}'s attack did double damage!`);
        heroHealth -= 20;
      } else if (monsterDiceRoll > 10 && monsterDiceRoll <= 18) {
        alert(`Hit! ${monsterName} strikes ${heroName}!`);
        heroHealth -= 10;
      } else if (monsterDiceRoll > 2 && monsterDiceRoll <= 10) {
        alert(`miss! ${monsterName}'s attack did no damage.`);
      } else {
        alert(`Critical miss! ${monsterName} accidentally stabed self!`);
        heroHealth -= 5;
      }
    }
    switch (true) {
      case monsterHealth <= 0 && heroHealth <= 0:
        alert(`${heroName} and ${monsterName} have both fallen!`);
        break;
      case heroHealth <= 0:
        alert(
          `${monsterName} has vanquished ${heroName}! Darkness engulfed the land!`
        );
        break;
      default:
        alert(
          `${heroName} has vanquished ${monsterName}! The village is safe...but for how long.`
        );
        break;
    }
  }
}
