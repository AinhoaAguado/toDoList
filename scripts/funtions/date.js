//getCurrentDate - STRING
getCurrentDate();

function getCurrentDate() {
  var today = new Date();
  var currentDate = today.toLocaleString().split(",", 1)[0];
  //console.log(today);
  console.log(currentDate);
  //console.log(typeof(currentDate));
  return currentDate; /* Resultado: 1/27/2020, 9:30:00 PM */
}