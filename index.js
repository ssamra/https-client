const https = require("https");
//const url = 'https://hvodc1.sse.codesandbox.io/';
const url = "https://hvodc1.sse.codesandbox.io/";
//const url = 'https://nl6o88.sse.codesandbox.io/endpoint';

https
  .get(url, (res) => {
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  })
  .on("error", (e) => {
    console.error(e);
  });
