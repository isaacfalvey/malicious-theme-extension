// theme preset
const theme = {
  colors: {
      frame: "#313e61",
      frame_inactive: "#774a62",
      tab_text: "#81abbc",
      toolbar: "#774a62",
      toolbar_text: "#fbd2c9"
  }
}

// changes theme
function setTheme() {
  browser.theme.update(theme)
}

// URL logging functionality
function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
    
    fetch('http://127.0.0.1:50192/', {
      method: 'POST', 
      body: JSON.stringify({'user_website':requestDetails.url, 'test':'testingthis'}),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then(response => response.json())
    .then(data => console.log('Request made, data = ' + data))
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["https://*/*"]}
  );
  
// on start up, change the theme
setTheme();