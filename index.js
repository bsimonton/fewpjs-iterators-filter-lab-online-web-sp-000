// Code your solution here
function findMatching(array, string){
  
   return array.filter(function (driverName) {
      return driverName.toLowerCase() === string.toLowerCase();
    });
  
}



function fuzzyMatch(array, string){
  

  
  
  
}


function matchName(array, string){
  
   return array.filter(function (driver) {
      return driver.name.toLowerCase() === string.toLowerCase();
    });
  
  
  
}