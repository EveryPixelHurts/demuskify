
// Function to replace the Twitter logo with an emoji
function replaceLogoWithEmoji() {

  const findLogoInterval = setInterval(() => {
    const logoElement = document.querySelector("a[href='/home']");
    if (logoElement) {
      // You can replace the emoji here with any other Unicode emoji you want.
      logoElement.innerHTML = '<div style="font-size: 50px">💩</div>';
      // Stop the interval once the logo is replaced
      clearInterval(findLogoInterval);
    }

    console.log("Finding...");
  }, 100);
}

// Function to replace the Twitter favicon with an emoji
function replaceFaviconWithEmoji() {
  const favicon = document.querySelector('link[rel="shortcut icon"]');
  if (favicon) {
    // https://em-content.zobj.net/thumbs/120/apple/354/pile-of-poo_1f4a9.webp
    // https://github.githubassets.com/images/icons/emoji/unicode/1f4a9.png
    favicon.href = 'https://abs-0.twimg.com/emoji/v2/svg/1f4a9.svg'; // Replace 'URL_TO_YOUR_EMOJI_ICON' with the emoji icon URL.
  }
}

// Call the functions when the page is loaded
replaceLogoWithEmoji();
replaceFaviconWithEmoji();
