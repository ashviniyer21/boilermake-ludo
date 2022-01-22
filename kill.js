function kill(pieces, piece) {
     let colorAbrInd = ["r", "b", "y", "g"];
     let colorFullInd = ["Red", "Blue", "Yellow", "Green"];

     for (let x = 0; x < 4; x++) {
          if (piece.color !== colorFullInd[x]) {
               for (let i = 0; i < 4; i++) {
                    if (compareArrs(pieces[colorAbrInd[x] + i].coords, pieces.coords)) {
                         pieces[colorAbrInd[x] + i].location = -1;
                         pieces[colorAbrInd[x] + i].coords = pieces[colorAbrInd[x + i]].find_coordinates();
                    }
               }
          }
     }
}

function compareArrs(arr1, arr2) {
     return ((arr1[0] === arr2[0]) && (arr1[1] === arr2[1]));
}