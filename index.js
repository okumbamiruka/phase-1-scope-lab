// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob'; //you can declare a global variable by attaching it to the window object
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'jessica';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'john';
    console.log(leastFavoriteCustomer)
}

console.log(leastFavoriteCustomer)

changeLeastFavoriteCustomer()