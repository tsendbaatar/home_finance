var uiController = (function () {})();

var financeController = (function () {})();

var appController = (function (uiController, financeController) {
  var ctrAddItem = function () {
    //1. Oruulah ogogdliig delgetsees olj avna
    //2. Olj avsan ogogdoluudee sanhuugiin kontrollert damjuulna
    //3. Olj avsan ogogdloo web deeree gargana
    //4. Tusviig tootsoolno
    //5. Etsiin uldegdel, tootsoog delgetsend gargana
  };

  document.querySelector(".add__btn").addEventListener("click", function () {});

  document
    .querySelector(".add__value")
    .addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrAddItem();
      }
    });
})(uiController, financeController);
