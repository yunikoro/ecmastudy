/**
 * 
 */
console.log('file upload');

var fileDom = document.querySelector('.fileLoad');
var fileSmt = document.querySelector('.subFile');

function doAjaxRequest(url, method, data) {
	var http = new XMLHttpRequest();
	var formdata = new FormData();
	var promise = new Promise(function(resolve, reject) {
		formdata.append('fieldNameHere', data)
		http.open(method, url);
		//http.setRequestHeader('Content-Type', 'multipart/form-data');
		//http.setRequestHeader('boundary', '-------------------------acebdf13572468');
		http.send(formdata);
		http.onreadystatechange = function() {
			if(http.readyState === XMLHttpRequest.DONE) {
				if(http.status === 200) {
					var response = JSON.parse(http.responseText);
					resolve(response);
				} else {
					reject('doAjaxRequest - fail');
				}
			}
		}
	});
	return promise;
}

fileSmt.addEventListener('click', function() {
	console.log('click');
	doAjaxRequest('../file', 'POST', fileDom.files[0]);
})