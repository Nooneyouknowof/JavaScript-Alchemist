// background.js

// Event listener for page load
chrome.webNavigation.onCompleted.addListener(function(details) {
    // Check if the navigation was successful
    if (details.frameId === 0) { // Ensure it's the top frame
      // Retrieve the URL of the loaded page
      const loadedUrl = details.url;
      
      // Do something with the loaded URL
      console.log("Page loaded:", loadedUrl);
      
      // You can perform any other actions you need here
    }
  });