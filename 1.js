function frankenSplice(arr1, arr2, n) {
    let m = arr2.splice(0, n)
    console.log(m)
    let arr3 = m.concat(arr1);
    console.log(arr3)
    let arr4 = arr3.concat(arr2.splice(0, n))
    console.log(arr4)
    return arr4;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
