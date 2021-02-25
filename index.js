const services = [
  "rewards",
  "savings",
  "investments",
  "forex",
  "analytics",
  "cards",
  "payments",
  "loan",
  "support",
];

// Service list updation

let optionDiv = document.getElementById("option_list");
let opacity = 0;
let co = 0;
let intervalID = 0;
// services.forEach((ex) => {
//   fadeIn();
//   optionDiv.innerHTML = ex;
//   co = (co + 1) % services.length;
//   fadeOut();
// });
fadeIn();
function fadeOut() {
  intervalID = setInterval(hide, 50);
}
function fadeIn() {
  optionDiv.innerHTML = services[co].toUpperCase();
  Array.from(document.getElementsByClassName(services[co])).forEach((ele) => {
    ele.classList.add("highlight");
  });
  intervalID = setInterval(show, 50);
}
function show() {
  opacity = Number(
    window.getComputedStyle(optionDiv).getPropertyValue("opacity")
  );
  if (opacity < 1) {
    opacity = opacity + 0.1;
    optionDiv.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
    fadeOut();
  }
}
function hide() {
  opacity = Number(
    window.getComputedStyle(optionDiv).getPropertyValue("opacity")
  );
  if (opacity > 0) {
    opacity = opacity - 0.1;
    optionDiv.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
    Array.from(document.getElementsByClassName(services[co])).forEach((ele) => {
      ele.classList.remove("highlight");
    });
    co = (co + 1) % services.length;
    fadeIn();
  }
}

// cuboidal email collector

document.getElementById("email").addEventListener("focus", () => {
  document.getElementById("cuboidform").classList.add("ready");
});
//remove '.ready' when user blus away but only if there is no content
document.getElementById("email").addEventListener("blur", () => {
  if (document.getElementById("email").innerText == "")
    document.getElementById("cuboidform").classList.remove("ready");
});

//If the user is typing something make the arrow green/.active
document.getElementById("email").addEventListener("keyup", () => {
  //this adds .active class only if the input has some text
  document
    .getElementById("submit-icon")
    .classList.toggle(
      "active",
      document.getElementById("email").innerText.length > 0
    );
});

//on form submit remove .ready and add .loading to the form
document.getElementById("cuboidform").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("cuboidform").classList.remove("ready");
  document.getElementById("cuboidform").classList.add("loading");
  //finish loading in 3s
  //   console.log(e);
  setTimeout(complete, 2000);
  //prevent default form submisson
  return false;
});
function complete() {
  document.getElementById("cuboidform").classList.remove("loading");
  document.getElementById("cuboidform").classList.add("complete");
}
//reset/refresh functionality
document.getElementById("reset-icon").addEventListener("click", () => {
  document.getElementById("cuboidform").classList.remove("complete");
});
