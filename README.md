# Pexels Bulk Download Script

This repository contains a script to automate downloading videos and images from [Pexels](https://www.pexels.com). This script is intended for educational purposes only.

## Description

The script loops through every `<article>` element on a Pexels webpage, starting from the 27th article (index 26). It checks if there is a download button and, if so, emulates a click to download the video or image. If the download is successful, it logs the ID of the downloaded media and the index of the article. The script waits for 5 seconds before continuing with the next article. If an error occurs, the script stops execution and logs the error.

The script has been tested on collections, but it should also work for user profiles and search results.

## Usage

1. Open Chrome and navigate to the Pexels webpage containing the articles (e.g., a collection, user profile, or search results).
2. Scroll down to the very bottom of the page to ensure all articles are loaded.
3. Open Developer Tools:
   - Windows/Linux: `Ctrl+Shift+I`
   - Mac: `Cmd+Opt+I`
4. Go to the `Console` tab.
5. Copy the content of `download_script.js` and paste it into the console.
6. Press `Enter` to run the script.

## Files

- `download_script.js`: Contains the JavaScript code for the download automation.
- `README.md`: This file, providing information about the project.

## License

This project is licensed under the MIT License.
