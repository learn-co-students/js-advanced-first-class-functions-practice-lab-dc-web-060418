const logDriverNames = function (array) {
  return array.forEach(function (driver) {
    console.log(driver.name)
  });
};

const logDriversByHometown = function (array, location) {
  return array.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function (array) {
  return array.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
};

const driversByName = function (array){
  return array.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  });
};

const totalRevenue = function (array) {
  return array.reduce(function (total, currentDriver) {
    return total + currentDriver.revenue;
  }, 0);
};

const averageRevenue = function (array) {
  return totalRevenue(array)/array.length;
};
