(async function() {
  // Helper function to wait for a given number of milliseconds
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Function to process each article
  async function processArticles() {
    const articles = document.querySelectorAll('article');
    
    for (let i = 0; i < articles.length; i++) { // change 0 in case you need to restart the script and need to define a new index. See index in console log
      const article = articles[i];
      const downloadButton = article.querySelector('a[download][title="Download"]');

      if (downloadButton) {
        try {
          // Emulate button click
          downloadButton.click();
          console.log(`Clicked download button for video ID: ${downloadButton.href.split('/').pop()} at article index: ${i}`);
          
          // Wait for 10 seconds
          await wait(10000);
        } catch (error) {
          console.error('An error occurred:', error);
          break;
        }
      }
    }
  }

  // Start processing the articles
  processArticles();
})();
