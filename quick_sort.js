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


//Quick Sort 2
function swap(items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort2(items, left, right) {
    let index;

    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort2(items, left, index - 1);
        }

        if (index < right) {
            quickSort2(items, index, right);
        }
    }

    return items;
}

//Test
let item = [5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15];
console.log(QuickSort(item));

console.log(quickSort2(item, 0, item.length - 1));
