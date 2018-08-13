$(function() {
  $("#userinput").change(e => {
    $("#test").html($("#userinput").val());
    console.log("text changed");
    let params = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      let msg = { url: $("#userinput").val() };
      console.log(msg);
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  });
});
