// Global variables
let currentPageNum = 0;

// Page constructor - every page will have a current page number, number of sections, and functions to navigate pages
function Page(currentPageNumber, numOfSections) {
  this.currentPageNumber = currentPageNumber;
  this.numOfSections = numOfSections;
  this.getNextPage = function () {
    return (this.currentPageNumber = currentPageNum++);
  };
  this.getPrevPage = function () {
    return (this.currentPageNumber = currentPageNum--);
  };
}

// UI constructor
function Letters() {
  // Get letters
  this.getLetters = async function (currentPageNumber) {
    try {
      const letters = await fetch("js/qaida.json");
      const data = await letters.json();
      return data.letters[currentPageNumber];
    } catch (error) {
      console.log(error);
    }
  };
}

// Event Listeners

// On Windows or App load first page
window.addEventListener("load", async () => {
  const letters = new Letters();
  console.log(await letters.getLetters(currentPageNum));
});

// Get next button
document.getElementById("nextBtn").addEventListener("click", () => {
  const nextPage = new Page(currentPageNum, 0);
  nextPage.getNextPage();
  const letters = new Letters();
  letters.getLetters(nextPage);
});

// Get prev button
document.getElementById("prevBtn").addEventListener("click", () => {
  const nextPage = new Page(currentPageNum, 0);
  console.log(nextPage.getPrevPage());
});

// Select Page

// Play Button

// Bookmark
