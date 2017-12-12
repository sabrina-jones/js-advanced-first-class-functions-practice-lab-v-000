const logDriverNames = function(driversArray){
  driversArray.map(function(driver){
    console.log(driver.name);
  })
}

const logDriversByHometown = function(driversArray, location){
  driversArray.filter(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  })
}