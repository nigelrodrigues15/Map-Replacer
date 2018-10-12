// makes the button active
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {schemes: ['https', 'http', 'localhost', 'chrome', 'file']},
    })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}]);
});

// identify the active tab and change the background color as purple
chrome.pageAction.onClicked.addListener(function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        /* code: 'document.body.style.backgroundColor = "purple";', */
        /* referencing code in file rather then just code */
        file: 'main.js' }
      );
    })
  });
