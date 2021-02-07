const arr = [4,4,4,4];

const func = function(arrDemo) {
    return arrDemo.map(Math.sqrt)
};

const value = func(arr);

console.log(value)