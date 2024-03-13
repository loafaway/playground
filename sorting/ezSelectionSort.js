// JavaScript program for the implementation of Selection Sort
// 揀選排序

function ezSelectionSort(a) {
	let r = a.length - 1;

	while (r > 0) {
		let m = r;

		for (let i = r - 1; i >= 0; --i) {
			if (a[i] > a[m]) {
				m = i;
			}
		}

		if (m < r) {  // swap
			let tmp = a[m];
			a[m] = a[r];
			a[r] = tmp;
		}

		--r;
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezSelectionSort(tst);
console.log(tst);
