// Retrieve the text from Chrome storage and populate the textarea
chrome.storage.local.get(['note'], function(result) {
  const notepad = document.getElementById('notepad');
  notepad.value = result.note || '';

  // Add an event listener to save the text whenever it changes
  notepad.addEventListener('input', function() {
    const note = notepad.value;
    chrome.storage.local.set({ 'note': note });
  });
});
