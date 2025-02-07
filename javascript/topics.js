console.log("Time to get to fucking learning.");
console.log("");

let JS_fundamentals = [
  "1.Basic Syntax",
  "2.Control Flow",
  "3.Functions",
  "4.Arrays and methods",
  "5.Objects & Methods",
  "6.Scopes",
  "7.DOM Manipulation",
  "8.ES6+ features",
];
let JS_intermediate = [
  "9.Closures & Lexical Scope",
  "10.Async JS",
  "11.Fetch API & HTTP Requests",
  "12.Error Handling",
  "13.JSON & Local Storage",
  "14.OOP-JS",
  "15.Functional Programming",
  "16.Event loop & Execution Context",
];
let JS_advanced = [
  "17.Modules & Bundlers",
  "18.Performance & Optimization",
  "19.Web APIs",
  "20.Websockets & Real-time data",
  "21.Service workers and PWA",
  "22.Design Patterns",
  "23.Javascript Engines",
  "24.Meta-programming",
];

let topics_to_study = [JS_fundamentals, JS_intermediate, JS_advanced];

for (i = 0; i < topics_to_study.length; i++) {
  for (x = 0; x < topics_to_study[i].length; x++) {
    console.log(topics_to_study[i][x]);
  }
  console.log("");
}
