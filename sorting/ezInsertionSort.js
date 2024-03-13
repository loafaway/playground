// JavaScript program for the implementation of Insertion Sort
// 插入排序

function ezInsertionSort(a) {
	const n = a.length;
	let r = 1;

	while (r < n) {
		let key = a[r], m = r - 1;

		while (m >= 0 && a[m] > key) {
			--m;
		}

		if (m + 1 < r) {  // insertion
			let tmp = key;
			for (let i = r; i > m + 1; --i) {
				a[i] = a[i - 1];
			}
			a[m + 1] = tmp;
		}

		++r;
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezInsertionSort(tst);
console.log(tst);
