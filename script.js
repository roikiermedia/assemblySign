var play = true;
var waitTime = 20000; //time to cycle logo in ms

function showLogo() {
  $(".chaosFlLogo").removeClass("hidden");
}

function hideLogo() {
  $(".chaosFlLogo").addClass("hidden");
}

function showMessage() {
  $(".message").removeClass("hidden");
  $(".submessage").removeClass("hidden");
}

function hideMessage() {
  $(".message").addClass("hidden");
  $(".submessage").addClass("hidden");
}

function startAnimation() {
  setInterval(function () {
    hideMessage();
    showLogo();
    setTimeout(function () {
      hideLogo();
      showMessage();
    }, waitTime);
  }, (waitTime * 2));

}

function main() {
  hideMessage();
  if (play) {
    hideLogo();
    startAnimation();
  }

}

main();
