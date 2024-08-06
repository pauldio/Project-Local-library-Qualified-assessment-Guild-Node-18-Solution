//Create a function called findAccountById with two paramaters: Accounts(array) and ID - Return accnt object if matches the ID
//Declare a variable fundID() to store the array accnts 
function findAccountById(accounts, id) {
  let foundID = accounts.find((account) => account.id === id);
  return (foundID);
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here. 
}

//Create a function called sortAccountsByLastName to search in accounts the last name 
//Sort last names and call them alphabetically
function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here. 
}

//Create a function that will display the fist and last names of the customers
//in order to get the first and last name list to the new array fullNames need to use map() function
//return the new array fullNames
function getAccountFullNames(accounts) {
  let fullNames = accounts.map(({name:{first, last}}) => first + ' ' + last);
  return(fullNames);
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
