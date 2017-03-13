/**
 *  @yunikoro
 *  javascript map
 */
console.log('my map');

var firstMap = new Map();
var mapArrays = [];

firstMap.set('bar', 6);
firstMap.set('foo', 'wiki');
firstMap.set('name', 'rain');

firstMap.forEach(function(key, value, map) {
	var map = new Object();
	map.name = key;
	map.hello = value;
	mapArrays.push(map);
});


firstMap.forEach(function(key, value, map) {
	console.log(key);
})

console.log(mapArrays);