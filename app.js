function mapforEach(arr, fn) {
    var newarray = [];
    for (var i = 0; i < arr.length; i++) {
        newarray.push(
            fn(arr[i])
            );
    }
    return newarray;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapforEach(arr1, function (item) {
    return item * 2;
})
console.log(arr2);

var arr3 = mapforEach(arr1, function (item) {
    return item > 2
})
console.log(arr3);

function checkpastlimit(limiter, item) {
    return item > limiter;
}

var arr4 = mapforEach(arr1, checkpastlimit.bind(this, 2))
console.log(arr4);

function checkpastlimitsimplified(limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(this, limiter)
}

var arr5 = mapforEach(arr1, checkpastlimitsimplified(2))
console.log(arr5);