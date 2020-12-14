var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");

var span = document.getElementById("close1");
var span1 = document.getElementById("close2");
var span2 = document.getElementById("close3");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal1.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
span1.onclick = function () {
  modal1.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

function myFunction() {
  var fecha_ingreso = moment(document.getElementById("fecha_ingreso").value);
  // document.getElementById("demo").innerHTML = x;
  var fecha_salida = moment(document.getElementById("fecha_salida").value);

  var resp = fecha_salida.diff(fecha_ingreso, "days");

  var valorpordia = 600 / 30;

  document.getElementById("demo").innerHTML = ` ${resp * valorpordia} $ `;
  // console.log(resp*valorpordia)
}

function myFunction1() {
  var fecha_ingreso = moment(document.getElementById("fecha_ingreso1").value);
  // document.getElementById("demo").innerHTML = x;
  var fecha_salida = moment(document.getElementById("fecha_salida1").value);

  var resp = fecha_salida.diff(fecha_ingreso, "days");

  var valorpordia = 600 / 2500;

  document.getElementById("demo1").innerHTML = ` ${resp * valorpordia} $ `;
  // console.log(resp*valorpordia)
}
function myFunction2() {
  var fecha_ingreso = moment(document.getElementById("fecha_ingreso1").value);
  // document.getElementById("demo").innerHTML = x;
  var fecha_salida = moment(document.getElementById("fecha_salida1").value);

  var resp = fecha_salida.diff(fecha_ingreso, "days");

  var valorpordia = 600 / 2000;

  document.getElementById("demo2").innerHTML = ` ${resp * valorpordia} $ `;
  // console.log(resp*valorpordia)
}
