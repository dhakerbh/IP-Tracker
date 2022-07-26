function getIPFromAmazon() {
  fetch("https://checkip.amazonaws.com/")
    .then((res) => res.text())
    .then((data) => console.log(data));
}

const ip = getIPFromAmazon();
const request = new XMLHttpRequest();
console.log(ip);
//request.open("GET", `http://ip-api.com/json/${ip}`);
