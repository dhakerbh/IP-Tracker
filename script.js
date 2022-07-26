const request = new XMLHttpRequest();
request.open("GET", "http://ip-api.com/json/");
request.send();
request.responseType = "json";
request.onload = () => {
  res = request.response;
  var ip = res["query"];
  var city = res["city"];
  var code = res["countryCode"];
  var zip = res["zip"];
  var time = res["timezone"];
  var isp = res["org"];
  var lon = res["lon"];
  var lat = res["lat"];

  var loc = `${city}, ${code} ${zip}`;
  document.getElementById("ip-adress").innerHTML = ip;
  document.getElementById("loc").innerHTML = loc;
  document.getElementById("time").innerHTML = time;
  document.getElementById("isp").innerHTML = isp;
  document
    .getElementById("map")
    .setAttribute(
      "src",
      `https://www.google.com/maps/embed/v1/place?key=AIzaSyA--xjTv9gFM5AqwOu4FvZfEsPwz58977Q&q=${lat},${lon}&zoom=6`
    );
};

function GetIP() {
  var insertedIP = document.getElementById("txt1").value;

  const request = new XMLHttpRequest();
  request.open("GET", `http://ip-api.com/json/${insertedIP}`);
  request.send();
  request.responseType = "json";
  request.onload = () => {
    res = request.response;
    var ip = res["query"];
    var city = res["city"];
    var code = res["countryCode"];
    var zip = res["zip"];
    var time = res["timezone"];
    var isp = res["org"];
    var lon = res["lon"];
    var lat = res["lat"];

    var loc = `${city}, ${code} ${zip}`;
    document.getElementById("ip-adress").innerHTML = ip;
    document.getElementById("loc").innerHTML = loc;
    document.getElementById("time").innerHTML = time;
    document.getElementById("isp").innerHTML = isp;
    document
      .getElementById("map")
      .setAttribute(
        "src",
        `https://www.google.com/maps/embed/v1/place?key=AIzaSyA--xjTv9gFM5AqwOu4FvZfEsPwz58977Q&q=${lat},${lon}&zoom=6`
      );
  };
}
