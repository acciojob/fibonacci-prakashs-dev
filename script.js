function fibonacci(num) {
// your code here
	if(num == 1) return 0;
	if(num == 2) return 1;
	let a = 0, b = 1, ans = 0;
	for (let i = 1; i < num; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return ans
}

module.exports = fibonacci;
