$(function() {
  $("#userinput").change(e => {
    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      const val = $("#userinput").val();
      let msg = { url: val };
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  });
});
