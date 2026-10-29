(async function () {
  const START_INDEX = 0;     // Resume from this index if interrupted
  const DELAY_MS = 10000;    // 10 seconds between downloads

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  const articles = document.querySelectorAll('article');
  console.log(`Found articles: ${articles.length}`);

  window.pexelsStopDownloads = false;

  for (let i = START_INDEX; i < articles.length; i++) {
    if (window.pexelsStopDownloads) {
      console.log(`Stopped at index ${i}`);
      break;
    }

    const downloadButton = articles[i].querySelector(
      'a[download][href*="/download/video/"]'
    );

    if (!downloadButton) {
      console.warn(`No download button at index ${i}`);
      continue;
    }

    try {
      const videoId = downloadButton.href.match(/video\/(\d+)/)?.[1];

      downloadButton.click();

      console.log(
        `[${i + 1}/${articles.length}] Download triggered: Video ${videoId} (index ${i})`
      );

      if (i < articles.length - 1) {
        await wait(DELAY_MS);
      }

    } catch (error) {
      console.error(`Error at index ${i}:`, error);
      break;
    }
  }

  console.log('Download process finished.');
})();
