function logDriverNames(drivers) {
  const findName = function(driver) {
    console.log(driver.name);
  };
  drivers.forEach(findName);
};

function logDriversByHometown(drivers, location) {
  const findHometownDrivers = function(arr) {
    return arr.filter(function(driver) {return driver.hometown === location});
  };
  return logDriverNames(findHometownDrivers(drivers));
};

function driversByRevenue(drivers) {
  const copyOfDrivers= Object.assign([], drivers);
  const numberSorter = function(a, b) {
    return (a.revenue - b.revenue);
  };
  return copyOfDrivers.sort(numberSorter);
};

function driversByName(drivers) {
  const copyOfDrivers = Object.assign([], drivers);
  const stringSorter = function(a, b) {
    return (a.name).localeCompare(b.name);
  };
  return copyOfDrivers.sort(stringSorter);
}

function totalRevenue(drivers) {
  const moneyTotal = function(agg, driver) {
    return agg + driver.revenue
  };
  return drivers.reduce(moneyTotal, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
}
