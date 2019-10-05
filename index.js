// Code your solution here
function findMatching(array, string){
  
   return array.filter(function (driverName) {
      return driverName.toLowerCase() === string.toLowerCase();
    });
  
}