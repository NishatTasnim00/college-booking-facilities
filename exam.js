function factorial(n) {
	if (n === 0) {
		return 1; 
	}

	let result = 1;

	for (let i = 1; i <= n; i++) {
		result *= i;
	}

	return result;
}

// Test 
const n = 4;
const result = factorial(n);
console.log('Factorial of', n, 'is:', result); 
