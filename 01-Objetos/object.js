function setPropsOnObj(obj) {
    
   obj["p"]=5
   obj.plataforma=5
   
   obj.proximo = 
   function  (proximo) {
      return proximo +1
   }
   obj.la = {
   clave:{
       secreta: {
           es: 404,
       },
   },
}
   
}

/////////////

function setPropsOnArr(array) {
    array.hola = function (params){
       return 'Hola!'; 
    }
    array.river = "plate"
    array[0] =5;

  array.doble = function (value) {
      return value *2
  }
  
}



function  setPropsOnFunc (functionObject) {
    functionObject.year = "2017"
    functionObject.mitad = function (valor) {
        return valor/2
    }
    functionObject.prototype.helloWorld = function () {
        return 'Hello World'
    }
    return functionObject;
}