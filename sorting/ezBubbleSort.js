// JavaScript program for the implementation of Bubble Sort
// 氣泡排序

function ezBubbleSort(a) {
	let r = a.length - 1;

	while (r > 0) {
		let m = 0;

		for (let i = 0; i < r; ++i) {
			if (a[i] > a[i + 1]) {  // swap
				let tmp = a[i];
				a[i] = a[i + 1];
				a[i + 1] = tmp;
				m = i;
			}
		}

		r = m;
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezBubbleSort(tst);
console.log(tst);
