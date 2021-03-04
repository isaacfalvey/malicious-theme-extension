/*
Changes the theme of a page to be dark if it's white
*/

// get all currently open windows
browser.windows.getAll().then(wins => wins.forEach(themeWindow));

function darkTheme(window) {
    browser.theme.update(window.id , {
        colours: {
            frame: "black",
            tab_background_text: "white",
            toolbar: "#333",
            toolbar_text: "white"
        }
    });
}