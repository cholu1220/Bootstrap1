var correo = document.getElementById("correo");
var contrasena = document.getElementById("contraseña");
var error = document.getElementById("error");

function validarForm(){
  //console.log("Enviando formulario... ")
  var mensajeError = [];
  if (correo.value === null || correo.value === ''){
    mensajeError.push('Ingresa tu email');
  
  }
  if (contrasena.value === null || contrasena.value === ''){
    mensajeError.push('Ingresa tu password');
  
  }
  error.innerHTML = mensajeError.join(', ');
  return false;
}
var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
      evt.preventDefault();
      var mensajeError = [];
      if (correo.value === null || correo.value === ''){
        mensajeError.push('Ingresa tu email');
  
  }
      if (contrasena.value === null || contrasena.value === ''){
        mensajeError.push('Ingresa tu password');
  
  }
        error.innerHTML = mensajeError.join(', ');
      
    });

function consumirAPI() {
    var cantidadDosis = [];
    var caldas = [];
    var antioquia = [];
    var bogota = [];
}
//consumo API
fetch('https://www.datos.gov.co/resource/prrv-jnta.json')
    .then(respuesta_exitosa => respuesta_exitosa.json())
    .then(function(datos_obtenidos) {
        datos_obtenidos.forEach(elemento => {
            if (elemento.cantidad_dosis_aplicadas != undefined && elemento.Caldas != undefined && elemento.Bogota != undefined && elemento.Antioquia != undefined) {
                caldas.push(elemento.Caldas)
                antioquia.push(elemento.Antioquia);
                bogota.push(elemento.Bogota);
                cantidadDosis.push(elemento.cantidad_dosis_aplicadas);
            }
        });


        //variables para la grafica
         var graf1= {
           y: caldas,
           x: fecha,
           name: 'Caldas',
           type: 'bar'
         };

        var graf2 = {
            y: antioquia,
            x: fecha,
            name: 'Antioquia',
            type: 'bar'
        };

        var graf3 = {
            y: bogota,
            x: fecha,
            name: 'Bogota',
            type: 'bar'

        };

        var datosGraficas = [graf1, graf2, graf3];

        var layout = {
            barmode: 'stack',
            title: {
                text: 'Grafico de vacunación covid19',
            },
        };

        Plotly.newPlot('grafico', datosGraficas, layout);
    });

consumirAPI();