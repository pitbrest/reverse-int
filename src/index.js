module.exports = function reverse(n) {
	if(n < 0) {return Number(Math.abs(n).toString().split('').reverse().join(''))}
	else {return Number(n.toString().split('').reverse().join(''))}
}

