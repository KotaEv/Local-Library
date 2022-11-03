function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1)
}

function getTotalNumberOfBorrows(account, books) {
 let counter = 0;
 const accountInfo = account.id;
  books.forEach((book) => book.borrows.forEach((isBorrowed) => (accountInfo === isBorrowed.id && counter++)));
  
  return counter;
}
         


function getBooksPossessedByAccount(account, books, authors) {
  let booksPosessed = books.filter((book) => 
        book.borrows[0].returned === false && book.borrows[0].id === account.id);
  
  let bookDetails = booksPosessed.map((detail) => 
       ({...detail, author: authors.find((author) => author.id === detail.authorId)}));
  
  return bookDetails;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
