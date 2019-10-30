//Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    var count = 0;
    
    arrayOfSheep.forEach( function (sheep) {
      if (sheep)
        count++;
    });
    
    return count;
  }