/**
 * 
 */
console.log('my first mutation');

var needListen = document.getElementById('needListen');
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		console.log(mutation);
	});
	console.log(needListen.style.width);
});
var config = {attributes: true, childList: true, characterData: true};

observer.observe(needListen, config);

needListen.style.width = '100%';
needListen.style.height = '120px';
needListen.style.backgroundColor = 'red';
needListen.addEventListener('click', function() {
	
});

var btn = document.createElement('button')
btn.textContent = 'hello';

needListen.appendChild(btn);