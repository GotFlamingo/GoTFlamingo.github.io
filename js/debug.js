document.addEventListener("DOMContentLoaded", function () {
  var pTags = document.querySelectorAll(".upper-menu p");
  var mouseTrackPTag = document.getElementById("mouse-track");
  document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    pTags.forEach(function (pTag) {
      if (pTag === mouseTrackPTag) {
        pTag.textContent = "> mouse: " + mouseX + "px, " + mouseY + "px";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var memoryTag = document.getElementById("memory-track");
  var fpsTag = document.getElementById("fps-track");
  var frameCount = 0;
  var startTime = performance.now();
  function calculateFPS() {
    var currentTime = performance.now();
    var deltaTime = currentTime - startTime;
    var fps = Math.round(1000 / deltaTime);
    startTime = currentTime;
    fpsTag.textContent = "> fps: " + fps;
    frameCount++;
    requestAnimationFrame(calculateFPS);
  }
  function updateMemoryUsage() {
    var memoryUsed =
      Math.round((performance.memory.usedJSHeapSize / 1024 / 1024) * 100) / 100;
    memoryTag.textContent = "> memory: " + memoryUsed + " MB";
  }
  calculateFPS();
  setInterval(updateMemoryUsage, 100);
});
