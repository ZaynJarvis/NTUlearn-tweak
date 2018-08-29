chrome.runtime.onMessage.addListener(gotMessage);

setTimeout(() => {
  document
    .querySelector("#div_22_1")
    .querySelectorAll("a")
    .forEach(i => (i.target = "_blank"));
}, 1000);
document.querySelector("body").style.background = `url('${localStorage.getItem(
  "url"
) ||
  "http://papers.co/wallpaper/papers.co-mh70-cityscape-skyline-high-buildings-skyscrapers-sunset-36-3840x2400-4k-wallpaper.jpg"}`;
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

// Google Analytics
(function() {
  const Http = new XMLHttpRequest();
  const url = "https://zaynjarvis.com/api";
  fetch(url)
    .then(data => data.json())
    .then(res => {
      if (res.show) {
        console.log(res);
        const div = document.createElement("div");
        div.id = "module:_Tweak";
        div.className = "portlet clearfix reorderableModule";
        const title = document.createElement("h2");
        title.className = "TweakTitle";
        title.innerHTML = res.title;
        div.appendChild(title);
        const container = document.createElement("div");
        container.className = "TweakContainer";
        container.id = "TweakAds";
        container.innerHTML = res.ad ? res.ad : "";
        div.appendChild(container);
        const subTitle = document.createElement("div");
        subTitle.className = "TweakSubTitle";
        subTitle.id = "TweakAds";
        subTitle.innerHTML = res.sub;
        container.appendChild(subTitle);
        const p = document.createElement("p");
        p.innerHTML = res.p;
        container.appendChild(p);
        const s = document.querySelector("#column0");
        s.appendChild(div);
      }
    });
})();
