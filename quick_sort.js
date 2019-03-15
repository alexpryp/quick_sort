"use strict"

//Quick Sort
function QuickSort(arr) {
    if (arr.length == 0) {
        return [];
    }

    let a = [], b = [], p = arr[0];


    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < p) {
            a[a.length] = arr[i];
        } else {
            b[b.length] = arr[i];
        }
    }

    return QuickSort(a).concat(p, QuickSort(b));
}

//Test
console.log(QuickSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15]));
