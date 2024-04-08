function findNaughtyStep(original, modified) {
  // Code here
  let areEquals = true;
  let originalMayor = false;
  let emptyString = original.length ===0;
  
  if(original.length > modified.length){
    areEquals = false;
    originalMayor = true;
  }
  else if(original.length < modified.length){
    areEquals = false;
    originalMayor = false;
  }
 
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

   return emptyString ? modified[0] : "";
}