/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var result = 0;
   preferences.unshift(0);
   
   for(let a = 1; a < preferences.length; a++){
	   if (preferences[a] < 1){a++}
	   let b = preferences[a];
       let c = preferences[b];
       
       result += a == preferences[c];
   }
   var randNum = result/3;
   if (randNum < 1){return 0}
   else{return Math.floor(randNum);}
  };

