// Code your solution here
function findMatching(array, string){
  
   return array.filter(function (driverName) {
      return driverName.toLowerCase() === string.toLowerCase();
    });
  
}



function fuzzyMatch(array, string){
  
   let lengthOfName = letters.length;
    return drivers.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === letters;
    });
  
  
  
}