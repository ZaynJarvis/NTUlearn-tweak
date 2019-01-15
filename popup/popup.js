document.querySelector("#userinput").onsubmit = e => {
  e.preventDefault();
  const content = document.querySelector("#url").value;
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    tabs => {
      let msg = { url: content };
      chrome.tabs.send(tabs[0].id, msg);
    }
  );
};
