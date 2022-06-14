console.log('watch.js hello');

const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");

function animate() {
  const date = new Date();

  const hour = date.getHours() % 12;
  const minute = date.getMinutes();
  const second = date.getSeconds();

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

