// =========================
// Topic: The OnClick Property ====================
const btn2 = document.querySelector("#btn-2");

btn2.onclick = function () {
  alert("You Clicked Btn2!");
};

function scream() {
  alert("U CLICKED");
}

btn2.onmouseenter = scream;

// Topic:  AddEventListener (3rd opt. - best one)====================
document.querySelector("h1").onclick = () => {
  alert("you clicked the H1!");
};

const btn3 = document.querySelector("#btn-3");

// colt's recoomended syntax to deal w/ event - there no 'on' as prefix
// find list of the events in MDN docs - 'Event Reference'
btn3.addEventListener("mouseup", function () {
  alert("you clicked the BTN-3!");
});

const btnStayOrRun = document.querySelector("#btn-4");

function stay() {
  alert("Ill Stay");
  // alert("you clicked the BTN-3!");
}

function run() {
  alert("Ill Run");
}

// btnStayOrRun.onclick = run;
// btnStayOrRun.onclick = stay; // unlike this which can't called two func. together

btnStayOrRun.addEventListener("click", stay);
btnStayOrRun.addEventListener("click", run, { once: true });

// Topic:  ====================

// =========================
