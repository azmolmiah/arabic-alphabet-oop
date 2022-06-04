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
