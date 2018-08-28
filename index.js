// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach( driver => console.log(driver.name));
}

function logDriversByHometown(drivers, town) {
  drivers.forEach( function (driver) {
    if (driver.hometown === town) console.log(driver.name);
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort( (a,b) => a.revenue - b.revenue );
}

function driversByName(drivers) {
  return drivers.slice().sort( (a,b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
  console.log("drivers", drivers);
  let x = drivers.reduce ( function ( total, driver) {
    console.log("-- total "+total+' driver'+driver.revenue);
    total+=driver.revenue;
  });
  return x;
}