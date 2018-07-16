// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach((driver) => console.log(driver['name']))
}

function logDriversByHometown(drivers, hometown) {
  logDriverNames(drivers.filter((driver) =>
    (driver['hometown'].localeCompare(hometown) === 0)))
}

function driversByRevenue(drivers) {
  return [...drivers].sort((a, b) => (a['revenue'] - b['revenue']))
}

function driversByName(drivers) {
  return [...drivers].sort(((a, b) => (a['name'].localeCompare(b['name']))))
}

function totalRevenue(drivers) {
  return drivers.reduce((acc, driver) => (acc += driver['revenue']), 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}