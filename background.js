// // This script runs in the background and listens for the browser window to close
// chrome.windows.onRemoved.addListener(function(windowId) {
//   // Retrieve the text from the textarea
//   const notepad = document.getElementById('notepad');
//   const note = notepad.value;

//   // Save the text to Chrome storage
//   chrome.storage.local.set({ 'note': note });
// });


chrome.runtime.onInstalled.addListener(() => {
  // Set up the default value for the notepad content in case it's not set yet
  chrome.storage.local.get(['note'], (result) => {
    if (!result.note) {
      chrome.storage.local.set({ 'note': '' });
    }
  });
});