function onSubmit() {
  const content = document.querySelector("#userinput").value;
  let params = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(params, function(tabs) {
    let msg = { url: content };
    chrome.tabs.sendMessage(tabs[0].id, msg);
  });
}
