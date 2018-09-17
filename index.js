// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(el => console.log(el.name));
}

function logDriversByHometown(drivers, hometown) {
  drivers.filter(el => el.hometown === hometown).forEach(el => console.log(el.name));
}

function driversByRevenue(drivers) {
  copy = drivers.slice();
  copy.sort((x, y) => x.revenue - y.revenue);
  return  copy;
}

function driversByName(drivers) {
  copy = drivers.slice();
  copy.sort((x, y) => x.name.localeCompare(y.name));
  return  copy;
}

function totalRevenue(drivers) {
  return drivers.reduce((rev, cur) => rev += cur.revenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
