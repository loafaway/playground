// JavaScript program for the implementation of Shell Sort
// (1959 by D. L. Shell)
// 蕭爾排序

function ezShellSort(a) {
	// using the gap sequence 1,4,13,40,121,364,...
	const n = a.length;
	const gaps = [0];
	let gap = 1;

	while (gap < n) {  // 間距皆小於陣列長度
		gaps.push(gap);
		gap = 3 * gap + 1;
	}

	while ((gap = gaps.pop()) > 0) {
		// doing insertion sort on each subarray
		for (let k = 0; k < gap; ++k) {
			for (let r = k + gap; r < n; r += gap) {
				let key = a[r], m = r - gap;  // 自無序區取元素

				while (m >= 0 && a[m] > key) {
					m -= gap;
				}

				if (m + gap < r) {  // insertion
					let tmp = key;
					for (let i = r; i > m + gap; i -= gap) {
						a[i] = a[i - gap];
					}
					a[m + gap] = tmp;
				}
			}
		}
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezShellSort(tst);
console.log(tst);
