// JavaScript program for the implementation of Comb Sort
// 梳直排序

function nextGap(gap) {
	// using the shrink factor 1.3
	gap = Math.floor((gap * 10) / 13);
	if (gap < 1) gap = 1;
	return gap;
}

function ezCombSort(a) {
	// some initialization
	const n = a.length;
	let gap = n;
	let swapped = true;

	// Keep running while the gap is more than
	// 1 or the last iteration caused a swap.

	while (gap > 1 || swapped == true) {
		gap = nextGap(gap);
		swapped = false;  // assumed

		for (let i = 0; i < n - gap; ++i) {
			if (a[i] > a[i + gap]) {  // swap
				let tmp = a[i];
				a[i] = a[i + gap];
				a[i + gap] = tmp;
				swapped = true;  // flagged
			}
		}
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezCombSort(tst);
console.log(tst);
