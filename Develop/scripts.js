// Create a time that represent the current hour
// create a function for the save button
$(document).ready(function () {
  console.log("hi");
  
  //create save btn and localstorage the text from box
  var saveBtn9 = document.getElementById("savebtn9");
  saveBtn9.addEventListener("click", () => {
    localStorage.setItem("text9", document.getElementById('text9h').value);
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  

  var saveBtn10 = document.getElementById("savebtn10");
  saveBtn10.addEventListener("click", () => {
    localStorage.setItem("text10", $("#text10h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn11 = document.getElementById("savebtn11");
  saveBtn11.addEventListener("click", () => {
    localStorage.setItem("text11", $("#text11h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn12 = document.getElementById("savebtn12");
  saveBtn12.addEventListener("click", () => {
    localStorage.setItem("text12", $("#text12h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn13 = document.getElementById("savebtn13");
  saveBtn13.addEventListener("click", () => {
    localStorage.setItem("text13", $("#text13h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn14 = document.getElementById("savebtn14");
  saveBtn14.addEventListener("click", () => {
    localStorage.setItem("text14", $("#text14h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn15 = document.getElementById("savebtn15");
  saveBtn15.addEventListener("click", () => {
    localStorage.setItem("text15", $("#text15h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn16 = document.getElementById("savebtn16");
  saveBtn16.addEventListener("click", () => {
    localStorage.setItem("text16", $("#text16h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });
  var saveBtn17 = document.getElementById("savebtn17");
  saveBtn17.addEventListener("click", () => {
    localStorage.setItem("text17", $("#text17h").val());
    document.getElementById("notify").style.display = "block";
    setTimeout(function () {
      document.getElementById("notify").style.display = "none";
    }, 4000);
  });

//load any saved data from localStorage
  document.getElementById('text9h').innerHTML= localStorage.getItem("text9")
  document.getElementById('text10h').innerHTML= localStorage.getItem("text10")
  document.getElementById('text11h').innerHTML= localStorage.getItem("text11")
  document.getElementById('text12h').innerHTML= localStorage.getItem("text12")
  document.getElementById('text13h').innerHTML= localStorage.getItem("text13")
  document.getElementById('text14h').innerHTML= localStorage.getItem("text14")
  document.getElementById('text15h').innerHTML= localStorage.getItem("text15")
  document.getElementById('text16h').innerHTML= localStorage.getItem("text16")
  document.getElementById('text17h').innerHTML= localStorage.getItem("text17")
  //changing the color of the column when hour change
});



//time
setInterval(() => {
  document.getElementById("currentDay").textContent = moment().format(
    "MMMM Do, YYYY [at] hh:mm:ss a"
  );
}, 1000);

/* 
var time = document.getElementsByName('s_time')[0].value || new Date().getTime();

var d = new Date(time);
var currentHour = d.getHours();
if (currentHour < 9 || currentHour >= 17) {
    alert('something');
} */

