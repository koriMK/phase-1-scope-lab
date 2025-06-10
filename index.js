// Task 1: Declare global variable customerName
var customerName = 'bob';

// Task 2: Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Function that creates a global bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob'; // This creates a global variable (intentionally bad practice)
}

// Task 4: Function that modifies the global bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Constant and attempt to change it
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // This will throw an error when called because you can't reassign a constant
  leastFavoriteCustomer = 'someone else';
}