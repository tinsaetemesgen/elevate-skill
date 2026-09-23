let age = 10;

if (age > 18) {
  console.log("Adult");
} else {
  console.log("young");
}



const price = 100;
const money = 100;

if (money > price) {
  console.log("You can buy it and have exchange");
} else if (money === price) {
  console.log("You have the exact amount");
} else {
  console.log("You don't have enough money");
}

const match = "available";
const weather = "rain";

// if match is available and weather is sunny, you can go to the stadium

if (match === "available" && weather === "sunny") {
  console.log(" you can go to the stadium");
} else if (weather != "sunny" && match != "available") {
  console.log(" no game and bad weather");
} else if (match === "available" && weather != "sunny") {
  console.log("can't go because of bad weather");
} else {
  console.log("good weather but no game");
}



let trafficLight = "yello";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Prepare to stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}
