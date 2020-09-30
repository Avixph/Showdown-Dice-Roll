{
  document.getElementById("startButton").addEventListener(
    "click",
    function () {
      document.getElementById("start").hidden = true;
      document.getElementById("battle").hidden = false;
    },
    false
  );

  document.getElementById("returnButton").addEventListener(
    "click",
    function () {
      document.getElementById("battle").hidden = true;
      document.getElementById("start").hidden = false;
    },
    false
  );

  function fight() {}
}
