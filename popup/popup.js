document.querySelector('#userinput').onsubmit = e => {
	e.preventDefault();
	let params = {
		active: true,
		currentWindow: true,
	};
	chrome.tabs.query(params, gotTabs);

	function gotTabs(tabs) {
		const val = document.querySelector('#url').value;
		let msg = { url: val };
		chrome.tabs.sendMessage(tabs[0].id, msg);
		document.querySelector('#url').value = '';
	}
};
