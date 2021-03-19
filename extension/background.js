function logURL(requestDetails) {
    console.log("Loading: " + requestDetails.url);
    
    fetch('http://127.0.0.1:50192/', {method: 'POST', body: {'url':requestDetails.url}})
    .then(response => response.json())
    .then(data => console.log('Request made, data = ' + data))
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    logURL,
    {urls: ["<all_urls>"]}
  );
  
  