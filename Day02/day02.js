function manufacture(gifts, materials) {
  // Code here
  const manufacturedGifts = [];
  var fullManufactured = true
  const myMaterials = materials.split('');

  for (var gift of gifts){
    const splitedGift = gift.split('');

    for (var material of splitedGift){
      if(!myMaterials.includes(material)){
        fullManufactured = false
        break;
      }
      else{
        fullManufactured = true
      }
      
    }
    if (fullManufactured){
      manufacturedGifts.push(gift);
    }
  }
 return manufacturedGifts;
}


// 210 puntos
