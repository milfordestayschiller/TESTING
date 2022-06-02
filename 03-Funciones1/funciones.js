function crearCalculadora(calculadora) {
let resultado = 0;

let objetoARetornar = {
    valor: function (params) {
        return resultado
        
    },
    
    sumar: function (num){
        resultado+=num
    },

    restar: function (num) {
      resultado-=num
    },

    reset: function (params) {
      return resultado = 0;
    }
    
}
return objetoARetornar
}








