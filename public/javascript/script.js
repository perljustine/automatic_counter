let valueDisplays = document.querySelectorAll(".num");
let interval = 40000; // maximum = 40000


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0; // commencer à zéro
  let endValue = parseInt(valueDisplay.getAttribute("data-val")); // on vérifie la valeur du data
  let duration = Math.floor(interval / endValue); // la durée sera l'équivalent entre l'interval etlavaleur de fin Endvalue
  let counter = setInterval(function () {
    startValue += 1; // on rajoute 1 a chqaue tour de boucle
    valueDisplay.textContent = startValue; // le tete est la valeur de chaque nombre
    if (startValue == endValue) {
      clearInterval(counter);
    } // si les valeur sont egales alors on reset le counter
  }, duration); // sinon la fonction duration est toujours actuelle 
});