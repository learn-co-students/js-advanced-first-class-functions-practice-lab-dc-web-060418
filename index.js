// Code your solution in this file!
function logDriverNames(drivers) {
    return drivers.forEach(function(driver) {
        console.log(driver.name);
    });
}

function logDriversByHometown(drivers, city) {
    return drivers.sort(function(driver){
        if(driver.hometown === city) {
            console.log(driver.name)
        }       
    });
}

function driversByRevenue(drivers) {
    return [...drivers].sort(function(driver1, driver2){
        return driver1.revenue - driver2.revenue;
    });
}

function driversByName(drivers) {
    return [...drivers].sort(function(driver1, driver2){
        return driver1.name.localeCompare(driver2.name)
    })
}

function totalRevenue(drivers) {
    return drivers.reduce(function(total, driver){
        return driver.revenue + total;
    }, 0);
}

function averageRevenue(drivers){
    total = totalRevenue(drivers)
    return total / drivers.length;
}

