//First part of the task:

// for (let i = 1; i <= 100; i++) {
// 	if ((i % 3 == 0) & (i % 4 == 0)) console.log('Bish-Bosh');
// 	else if (i % 3 == 0) console.log('Bish');
// 	else if (i % 4 == 0) console.log('Bosh');
// 	else console.log(i);
// }

//Second part of the task
const bishInput = document.getElementById('bishValue');
const boshInput = document.getElementById('boshValue');
const totalInput = document.getElementById('total');
const generateBtn = document.getElementById('generateBtn');
const resultOutput = document.getElementById('result');

generateBtn.addEventListener('click', function () {
	//Reset from previous uses
	resultOutput.innerHTML = '';

	let bishValue = parseInt(bishInput.value);
	let boshValue = parseInt(boshInput.value);
	let totalValue = parseInt(totalInput.value);

	// Check for valid input
	if (
		isNaN(bishValue) ||
		isNaN(boshValue) ||
		isNaN(totalValue) ||
		bishValue <= 0 ||
		boshValue <= 0 ||
		totalValue <= 0
	) {
		resultOutput.innerHTML = '<p>Please enter valid positive numbers.</p>';
		return;
	}
	for (let i = 1; i <= totalValue; i++) {
		let output = '';

		if ((i % bishValue == 0) & (i % boshValue == 0)) {
			output = 'Bish-Bosh';
		} else if (i % bishValue == 0) {
			output = 'Bish';
		} else if (i % boshValue == 0) {
			output = 'Bosh';
		} else {
			output = i;
		}
		//Alternative option: resultOutput.innerHTML += output + '<br>';
		let p = document.createElement('p');
		p.textContent = output;
		resultOutput.append(p);
	}
	//Reset as the page doesn't reload
	bishInput.value = '';
	boshInput.value = '';
	totalInput.value = '';
});
