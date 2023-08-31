console.log(a);
var a = 15;
console.log(a);

// status
// 200 OK
// 300 redirection
// 400 user errors
// 500 server errors

/// xml http request ////
//api https://restcountries.com/v3.1/all
let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
  console.log(xhr.status);
  for (let i = 0; i < data.length; i++) {
    console.log(`
    Name : ${data[i].name.common}
    Flag : ${data[i].flags.png}
    Population : ${data[i].population}
    `);
  }
};
