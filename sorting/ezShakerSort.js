// JavaScript program for the implementation of Shaker Sort
// 搖晃排序

function ezShakerSort(a) {
	let L = 0, r = a.length - 1, m = 0;

	while (L < r) {
		for (let i = L; i < r; ++i) {
			if (a[i] > a[i + 1]) {  // swap
				let tmp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = tmp;
				m = i;
			}
		}
		r = m;

		for (let i = r; i > L; --i) {
			if (a[i] < a[i - 1]) {  // swap
				let tmp = a[i];
				a[i] = a[i - 1];
				a[i - 1] = tmp;
				m = i;
			}
		}
		L = m;
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezShakerSort(tst);
console.log(tst);
