// get background from local storage
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if (message.url.startsWith('https://')) {
		localStorage.setItem('url', message.url);
		location.reload();
	}
});

// make anchor to new tab
setTimeout(() => {
	const block = document.querySelector('#div_22_1');
	if (block) block.querySelectorAll('a').forEach(i => (i.target = '_blank'));
}, 1000);

// set background
const deUrl =
	'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

document.querySelector('body').style.background = `url('${localStorage.getItem('url') || deUrl}`;
document.querySelector('body').style.backgroundSize = 'cover';

// handle login
try {
	document.querySelector('#wrapper .ntulearn h1').addEventListener('click', () => {
		window.open('https://ntulearn.ntu.edu.sg/webapps/login/', '_self');
	});
	document.querySelector('#wrapper .ntulearn h1').innerHTML = 'Log in to NTULearn';
} catch (e) {}

// Disable navigation puller
try {
	const container = document.querySelector('#navigationPane');
	container.classList.remove('navcollapsed');
	const contentPanel = document.querySelector('#contentPanel');
	contentPanel.classList.remove('contcollapsed');
	const menuWrap = document.querySelector('#menuWrap');
	menuWrap.style = 'display: block';
} catch (e) {}
