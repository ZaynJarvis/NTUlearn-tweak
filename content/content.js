chrome.runtime.onMessage.addListener(gotMessage);
document.querySelector("body").style.background = `url('${localStorage.getItem(
  "url"
) ||
  "https://cdna.artstation.com/p/assets/images/images/006/559/632/large/jesper-friis-anomaly.jpg?1499524948"}`;

document.querySelector("body").style.backgroundSize = "cover";
function gotMessage(message, sender, sendResponse) {
  console.log(message.url);
  localStorage.setItem("url", message.url);
  location.reload();
}

try {
  document
    .querySelector("#wrapper .ntulearn h1")
    .addEventListener("click", () => {
      window.open("https://ntulearn.ntu.edu.sg/webapps/login/", "_self");
    });
  document.querySelector("#wrapper .ntulearn h1").innerHTML =
    "Log in to NTULearn";
} catch (e) {}
