// Code your solution in this file!
function logDriverNames(driverNames){
driverNames.forEach(function(el, i, arr){console.log(el.name)});
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(el, i, arr){
    if (el.hometown === location) {
      console.log(el.name);
    }
  })
}

function driversByRevenue(drivers){
  const sortedDrivers = [...drivers];
  sortedDrivers.sort(function(a,b) {
    return a.revenue - b.revenue;
  })
  return sortedDrivers;
}

function driversByName(drivers){
  const sortedDrivers = [...drivers];
  sortedDrivers.sort(function(a,b){
    return a.name.localeCompare(b.name);
  })
  return sortedDrivers;
}

function totalRevenue(drivers){
  const x = drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  },0);
return x;
}

function averageRevenue(drivers){
  const rawRevenueTotal = totalRevenue(drivers);
  if (drivers.length != 0){
    return rawRevenueTotal/drivers.length;
  }
}
