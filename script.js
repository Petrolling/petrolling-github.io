(function () {
  "use strict";
  var trayTime = document.getElementById("tray-time");
  var trayDate = document.getElementById("tray-date");
  var fsBtn = document.getElementById("fullscreen-btn");
  var win = document.getElementById("win-welcome");
  function updateClock() {
    var now = new Date();
    if (trayTime) trayTime.textContent = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    if (trayDate) trayDate.textContent = now.toLocaleDateString([], { day: "numeric", month: "numeric", year: "numeric" });
  }
  function toggleFullscreen() {
    if (!win) return;
    win.classList.toggle("is-fullscreen");
    var desk = document.getElementById("desktop");
    if (desk) desk.classList.toggle("is-fullscreen-mode", win.classList.contains("is-fullscreen"));
    if (fsBtn) fsBtn.textContent = win.classList.contains("is-fullscreen") ? "❐" : "□";
  }
  function init() {
    updateClock();
    setInterval(updateClock, 5000);
    if (fsBtn) fsBtn.addEventListener("click", toggleFullscreen);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
