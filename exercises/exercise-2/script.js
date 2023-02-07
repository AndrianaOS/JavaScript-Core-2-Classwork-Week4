/*

Exercise 2
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

const colors = ["red", "yellow", "green", "pink"];

let counter = 0;

const main = document.querySelector("body");
setInterval(() => {
  main.style.backgroundColor = colors[counter++ % colors.length];
}, 5000);
