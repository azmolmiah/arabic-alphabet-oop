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
  // Get letters
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

function UI() {}

// Event Listeners
const book = new Book(0);

// On Windows or App load first page
window.addEventListener("load", async () => {
  const letters = new Letters();
  const initLetters = await letters.getLetters(0);
  console.log(initLetters);
});

// Get next button
document.getElementById("nextBtn").addEventListener("click", async () => {
  const nextPage = book.getNextPage();
  const letters = new Letters();
  console.log(await letters.getLetters(nextPage + 1));
});

// Get prev button
document.getElementById("prevBtn").addEventListener("click", async () => {
  const prevPage = book.getPrevPage();
  const letters = new Letters();
  console.log(await letters.getLetters(prevPage - 1));
});

// Select Page

// Play Button

// Bookmark
