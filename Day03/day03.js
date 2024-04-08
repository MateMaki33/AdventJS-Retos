function findNaughtyStep(original, modified) {
  // AQUI ME HE LIADO UN PELIN :)

  //Hay mejores formas pero...
  
  let areEquals = true;
  let originalMayor = false;
  let emptyString = original.length ===0;

  //Comprobamos longitudes de las cadenas para ver elementos faltantes o de sobra
  if(original.length > modified.length){
    areEquals = false;
    originalMayor = true;
  }
  else if(original.length < modified.length){
    areEquals = false;
    originalMayor = false;
  }
 //-------------------------------------------------------------------------------

  //Si la cadena no esta vacía
  if(!emptyString){

     if(!originalMayor && !areEquals){
        for(let element in modified){
          if(original.charAt(element) != modified.charAt(element)){
          return `${ modified.charAt(element) !== " " ? modified.charAt(element) : ""}`
          
      }
    }
  } 

  if(originalMayor){
    for(let element in original){
      if(modified.charAt(element) != original.charAt(element)){
        return `${original.charAt(element) !== " " ? original.charAt(element) : ""}`;
        
      }
    }
   } 
  }

  //si la cadena original esta vacia se devuelve el primer caracter de modified
  //si son iguales se devuelve ""
   return emptyString ? modified[0] : "";
}

// 120 puntos
