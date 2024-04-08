function findFirstRepeated(gifts) {
  const giftSet = new Set();

  //vamos comprobando un set creado. 
  //Si el set contiene el gift está repetido 
  //Si no lo contiene lo añadimos al set
  for (var gift of gifts){
    if(giftSet.has(gift)){
      return gift;
    }
    else{
      giftSet.add(gift);
    }
  }
  return -1;
}

// 100 puntos
