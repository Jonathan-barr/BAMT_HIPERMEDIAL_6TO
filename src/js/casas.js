var modal = document.getElementById("casa");
var btn = document.getElementById("btn_casa");

var span = document.getElementById("close_casa");

btn.onclick = function () {
    modal.style.display = "block";
  };
span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  function comprar_casa() {
    var txt_nombre   = document.getElementById('txt_nombre');
    var txt_apellido   = document.getElementById('txt_apellido');
    var txt_cedula   = document.getElementById('txt_cedula');
    var txt_telefono   = document.getElementById('txt_telefono');
    var txt_diferido   = document.getElementById('txt_diferido').value;

    console.log(txt_diferido)
    var valorpordia = 3000000 / txt_diferido;
  
    document.getElementById("casa_demo").innerHTML = 'El valor a pagar es '+valorpordia+'$ a '+txt_diferido+ 'meses';
    // console.log(resp*valorpordia)

  }