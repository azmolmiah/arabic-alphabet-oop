// Page constructor - every page will have a current page number, and functions to navigate pages
class Book {
  constructor(currentPageNumber) {
    this.currentPageNumber = currentPageNumber;
  }

  getNextPage() {
    return this.currentPageNumber++;
  }
  getPrevPage() {
    return this.currentPageNumber--;
  }
}

// Letter constructor - get all letters dependant on current page, check to see if it has more than one section
class Letters {
  async getLetters(currentPageNumber) {
    try {
      const letters = await fetch("js/qaida.json");
      const data = await letters.json();
      return data.letters[currentPageNumber];
    } catch (error) {
      console.log(error);
    }
  }
}

class Page {
  constructor(letters) {
    this.letters = letters;
    console.log(this.letters);
  }
}

// Instantiate book object
const book = new Book(0);

// On Windows or App load first page
window.addEventListener("load", async () => {
  const letters = new Letters();
  const initLetters = await letters.getLetters(book.currentPageNumber);
  console.log(initLetters);
});

// Next button
document.getElementById("nextBtn").addEventListener("click", async () => {
  const nextPage = book.getNextPage();
  const letters = new Letters();
  const nextLetters = await letters.getLetters(nextPage + 1);
  return new Page(nextLetters);
});

// Prev button
document.getElementById("prevBtn").addEventListener("click", async () => {
  const prevPage = book.getPrevPage();
  const letters = new Letters();
  const prevLetters = await letters.getLetters(prevPage - 1);
  return new Page(prevLetters);
});

// Select Page

// Play Button

// Bookmark
