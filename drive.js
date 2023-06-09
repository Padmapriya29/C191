AFRAME.registerComponent("drive", {
  init: function () {
    var gameStateValue = this.el.getAttribute("game");
    if (gameStateValue == "play") {
    }
  },

  isVelocityActive: function () {
    return Math.random() < 0.25;
  },

  driveCar: function () {
    var multiply = 10;
    var wheelRotation = 0;
    window.addEventListener("keydown", function (e) {
      var wheel = document.querySelector("#steeringWheel");
      if (e.code == "ArrowRight" && wheelRotation > -40) {
        wheelRotation -= 5;
        wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation });
      }
    });
  },
});
