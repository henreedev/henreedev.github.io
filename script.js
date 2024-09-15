window.onload = recalcScaleFactor;

window.onresize = recalcScaleFactor;

function recalcScaleFactor() {
  var scaleFactor = window.innerWidth / 384;
  document.documentElement.style.setProperty("--scale-factor", scaleFactor);
}
