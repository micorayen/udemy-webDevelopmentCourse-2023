document.querySelector("button").addEventListener("click", function (evt) {
  // alert("clicked");
  console.log(evt);
});

const input = document.querySelector("input");
// input.addEventListener("keydown", function () {
//   console.log("KeyDown");
// });
input.addEventListener("keyup", (e) => {
  // console.log("KeyUp");
  console.log(`Key: ${e.key}`);
  console.log(`Code: ${e.code}`);
});

const input2 = document.querySelector("#txt2");
input2.addEventListener("keyup", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
  }
});

const input3 = document.querySelector("#txt3");
input3.addEventListener("keyup", (e) => {
  if (e.code === "ArrowUp") {
    console.log("UP!");
  } else if (e.code === "ArrowDown") {
    console.log("DOWN!");
  } else if (e.code === "ArrowLeft") {
    console.log("LEFT!");
  } else if (e.code === "ArrowRight") {
    console.log("RIGHT!");
  } else {
    console.log("Ignored!");
  }
});
