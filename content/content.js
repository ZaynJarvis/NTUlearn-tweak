chrome.runtime.onMessage.addListener(gotMessage);

setTimeout(() => {
  const block = document.querySelector("#div_22_1");
  if (block) block.querySelectorAll("a").forEach(i => (i.target = "_blank"));
}, 1000);
document.querySelector("body").style.background = `url('${localStorage.getItem(
  "url"
) ||
  "https://avatars.mds.yandex.net/get-pdb/1209663/b075c80e-a715-45e7-a18a-c4fc3d8bcea7/orig"}`;
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
} catch (e) {}

(function() {
  const url = "https://zaynjarvis.com/api?school=all";
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

function ads(school) {
  const url = `https://zaynjarvis.com/api?school=${school}&name=`;
  console.log(url);
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
}

function msg(school, name) {
  const url = `https://zaynjarvis.com/api?school=${school}&name=${name}`;
  console.log(url);

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
}

try {
  const useless = document.querySelectorAll("#global-nav a span")[0];
  const txt = document.querySelector("#global-nav a");
  txt.removeChild(useless);
  const arr = txt.innerText.split(" ");
  txt.appendChild(useless);
  const school = arr[0];
  const name = arr.slice(1, arr.length + 1).join("%20");
  ads(school);
  msg(school, name);
} catch (e) {}

// Disable navigation puller
try {
  const container = document.querySelector("#navigationPane");
  container.classList.remove("navcollapsed");
  const contentPanel = document.querySelector("#contentPanel");
  contentPanel.classList.remove("contcollapsed");
  const menuWrap = document.querySelector("#menuWrap");
  menuWrap.style = "display: block";
} catch (e) {}
