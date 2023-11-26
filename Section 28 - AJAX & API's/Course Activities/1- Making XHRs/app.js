// Topic: Making XHRs ==================================

let req = new XMLHttpRequest();

// Missing two event handler Callbacks
req.onload = function () {
  // this will run when theres no Error
  console.log("It Loaded!");
  const data = JSON.parse(this.responseText);
  console.log(data);
  console.log(data.name, data.height);
};
req.onerror = function () {
  // this will run when theres Error
  console.log("Error!");
  console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1"); // 1- Open Request
req.send(); // 2- Send Request

//"https://swapi.dev/api/people/1";
