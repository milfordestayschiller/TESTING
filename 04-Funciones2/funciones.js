
function concatenar(p1, p2) {
       var string = p1 + p2
        return string
    }

    function concatenar() {
        var string = ""
         for(i=0; i<arguments.length; i++) {
             string += arguments[i]
         }
         return string;
     }

     function invocarFunciones(_params) {
         let string = "";
         for(i=0; i<arguments.length; i++) {
string+= arguments[i]()
         }
         return string
     }
     
     function creadorDeIncrementos(num1) {    
        function incrementaPor2 (num2) { 
          return num1 + num2;  
        }
        return incrementaPor2;       
      }
/*
      function creadorDeIncrementos(num1) {    
        return function (num2) {
            return num1 + num2;
        }
       }
   */
  let corte = 0;
 function invocacionUnica(params) {
     return function () {
         if(corte === 0) {
             params();
             corte++
         }
     }
     
 }
     
  ////////////////
  
  function objetoConClousure() {
    let valor = 0;
    return {
      incremento: function () {
        valor += 1;
        return valor;
      },
      incrementoPor10: function () {
        valor += 10;
        return valor;
      },
      pedirValor: function () {
        return valor;
      },
      cambiarValor: function (otroValor) {
        valor = otroValor;
        return valor;
      },
    };
  }

  //////////////

  function ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto) {
      let array= []
     
      for(i=0 ; i<arregloInvitados.length; i++) {
          array.push(arregloInvitados[i] = function invitado (codigoSecreto) {
            if(codigoSecreto == 404)
            return 'Facu' 
            else {
              return 'código secreto: invalido'
            }
            
          })
               }
                                       
      return array

      
  }

  function armarListaDeInvitados(params) {
     return [ 'Facu', 'Santi', 'Toni', 'Guille', 'Solano', 'Leo' ]
  }





  
      
    

      