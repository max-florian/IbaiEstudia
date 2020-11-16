chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({modo: 0}, function() {
    console.log("Modo Full Estudio: OFF");
  });
});