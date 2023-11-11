function fibonacci(num) {
// your code here
	if(num == 1) return 0;
    if(num == 2) return 1;
    let a = 0, b = 1, result;
    for (let i = 2; i < num; i++) {
        let c = a + b;
        result = c;
        a = b;
        b = c;
    }
  return result;
}

module.exports = fibonacci;
