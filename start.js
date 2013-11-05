/**
 * Listens for the app launching then creates the window
 *
 */
chrome.app.runtime.onLaunched.addListener(function() {
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    var width = screenWidth;
    var height = screenHeight;

    chrome.app.window.create('index.html', {
        width: width/2,
        height: height,
        left: ((screenWidth - width) / 2) + width / 2,
        top: (screenHeight - height) / 2
    });
});
