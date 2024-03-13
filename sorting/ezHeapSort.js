// JavaScript program for the implementation of Heap Sort
// 堆積排序

function heapify(a, r, i) {
	let k = 2 * i + 1;  // left child node

	while (k <= r) {
		if (k + 1 <= r && a[k] < a[k + 1]) {
			++k;  // larger right child node
		}

		if (a[k] <= a[i]) break;

		{
		let tmp = a[k];
		a[k] = a[i];
		a[i]= tmp;
		}
		i = k;  // sifting down
		k = 2 * i + 1;
	}
}

function ezHeapSort(a) {
	const n = a.length;

	// building the heap so that the largest is at the root
	for (let i = Math.floor(n / 2) - 1; i >= 0; --i) {
		heapify(a, n - 1, i);
	}

	for (let i = n - 1; i > 0; --i) {
		{
		let tmp = a[0];
		a[0] = a[i];
		a[i] = tmp;
		}
		heapify(a, i - 1, 0);
	}
}

let tst = [9, 3, 6, 8, 10, 11, 1, 25, 15, 21, 8, 7, 6, 5, 23,
	2, 9, 4, 7, 11];
console.log(tst);
ezHeapSort(tst);
console.log(tst);
