function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter (function (driver) {return driver['revenue'] >= revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filteredDrivers = drivers.filter (function (driver) {return driver['revenue'] >= revenue})
  return filteredDrivers.map(function(driver) {return driver['name']})
}

function exactMatch(driver, attribute) {
  
}