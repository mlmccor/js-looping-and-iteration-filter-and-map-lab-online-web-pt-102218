function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter (function (driver) {return driver['revenue'] >= revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filteredDrivers = drivers.filter (function (driver) {return driver['revenue'] >= revenue})
  return filteredDrivers.map(function(driver) {return driver['name']})
}

function exactMatch(drivers, attribute) {
  return drivers.filter (function (driver) {return driver[Object.keys(attribute)[0]] === Object.values(attribute)[0]})
}

function exactMatchToList(drivers, attribute) {
  let filteredDrivers = drivers.filter (function (driver) {return driver[Object.keys(attribute)[0]] === Object.values(attribute)[0]})
  return filteredDrivers.map(function(driver) {return driver.name})
}