  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });


  // sdasdsadasd




function secondsToDhms() {

  let diaD = document.querySelector("#frmInicial").value

  alert(diaD)

  var countDownDate = new Date(diaD).getTime();

  var myfunc = setInterval(function() {
      var now = new Date().getTime();

      var timeleft = countDownDate - now;
          
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24) + 1);
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      var faltam = (days+" Dias"+"  "+hours+" horas"+ "   " + minutes+" Minutos"+ "   " + seconds+" Segundos")
      
      var mostrarFalta = `<p> ${faltam} </p>`

      frmFaltam.innerHTML = mostrarFalta

      }, 1000)
    
    }

      

  iniciarCont.addEventListener("click", secondsToDhms)