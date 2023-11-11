function fibonacci(num) {
// your code here
	if(num == 1) return 0;
	if(num == 2) return 1;
	let a = 0, b = 1, c = 0;
	for (let i = 0; i < num; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return b;
}

module.exports = fibonacci;
