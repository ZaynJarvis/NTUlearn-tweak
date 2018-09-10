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
} catch (e) { }

(function () {
  const url = "https://zaynjarvis.com/api";
  fetch(url)
    .then(data => data.json())
    .then(res => {
      if (res.show) {
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
        if (s !== null) s.appendChild(div);
      }
    });
})();

function ads(school, name) {
  const url = `https://zaynjarvis.com/api?school=${school}&name=${name}`;
  fetch(url)
    .then(data => data.json())
    .then(res => {
      if (res && res.show) {
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
        container.innerHTML = res.ad ? res.ad : '';
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
        if (s !== null) s.appendChild(div);
      }
    });
}

try {
  const useless = document
    .querySelectorAll("#global-nav a span")[0];
  const txt = document
    .querySelector("#global-nav a");
  txt.removeChild(useless)
  const arr = txt.innerText.split(" ");
  const school = arr[0];
  const name = arr.slice(1, arr.length + 1).join(' ');
  ads(school, name)
} catch (e) { }