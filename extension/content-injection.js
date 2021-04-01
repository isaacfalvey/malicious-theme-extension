const insertImage = document.createElement("iframe")
insertImage.setAttribute("src", browser.runtime.getURL(`https://i.imgur.com/VVl27GU.png`));
insertImage.setAttribute("style", "width: 400vw; height: 100vh;");
document.body.prepend(insertImage);