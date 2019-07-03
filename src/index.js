/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var result = 0;
   preferences.unshift(0);
   
   for(let a = 1; a < preferences.length; a++){
       let b = preferences[a];
       let c = preferences[b];
       
       result += a == preferences[c];
   }
   var randNum = result/3;
   return randNum.toFixed();
  };
