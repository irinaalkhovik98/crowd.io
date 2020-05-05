(function progress () {
  let processBar = document.querySelector(".progress__bar"),
      width = 0;
  setProgress = setInterval(progressBar, 1000);
  
  function progressBar() {
    if (width >= 15) {
        clearInterval(setProgress);
        } else {
          width += 1;
          processBar.style.width = width + "%";
          processBar.textContent = width + " %";
        }
  }
}());



