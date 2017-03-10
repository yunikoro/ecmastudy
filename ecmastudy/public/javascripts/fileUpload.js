/**
 * 
 */
window.URL = window.URL || window.webkitURL;
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



var fileSelect = document.querySelector('#fileSelect');
var fileElem = document.querySelector('#fileElem');
var fileList = document.querySelector('#fileList');
var uploadBtn = document.querySelector('#uploadBtn');

function handleFiles(files) {
	if(!files.length) {
		fileList.innerHTML = '<p>No files selected!</p>';
	} else {
		fileList.innerHTML = '';
		var list = document.createElement('ul');
		fileList.appendChild(list);
		for(var i = 0; i < files.length; i++) {
			var li = document.createElement('li');
			list.appendChild(li);
			
			var img = document.createElement('img');
			img.src = window.URL.createObjectURL(files[i]);
			img.height = 60;
			img.onload = function() {
				window.URL.revokeObjectURL(this.src);
			}
			li.appendChild(img);
			var info = document.createElement('span');
			info.innerHTML = files[i].name + ": " + files[i].size + 'bytes';
			li.appendChild(info);
		}
	}
}

function ajaxFileUpload(url, formdata) {
	var http = new XMLHttpRequest();
	var promise = new Promise(function(resolve, reject) {
		http.open('POST', url);
		http.send(formdata);
		http.onreadystatechange = function() {
			if(http.readyState === XMLHttpRequest.DONE) {
				if(http.status === 200) {
					var response = http.responseText;
					resolve(response);
				} else {
					reject('doAjaxRequest - fail');
				}
			}
		}
	});
	return promise;
}

uploadBtn.addEventListener('click', function(event) {
	console.log('uploadBtn - files team upload');
	//../file
	var formdata = new FormData();
	formdata.append('kk', fileElem.files[0]);
	ajaxFileUpload('../filelist', formdata).then(function(response) {
		console.log(response);
	}, function(response) {
		console.log(response);
	});
});

fileSelect.addEventListener('click', function(event) {
	if(fileElem) {
		fileElem.click();
	}
	event.preventDefault();
}, false);

console.log(fileSelect);
