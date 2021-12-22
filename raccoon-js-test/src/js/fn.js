function max(...args) {
    return args.reduce((max, val) => val > max ? val : max);
}

// console.log(max(0, -1));

// 2

function min(...args) {
    return args.reduce((max, val) => val < max ? val : max);
}

// console.log(min(0, -1, 100, 500, 100500));