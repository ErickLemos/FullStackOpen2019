const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2
};

const result = sum(4, 4);
console.log(result);

// function linear
const square = p => p * p;
console.log(square(2));

//function for arrays
const t = [1, 2, 3];
const tSquared = t.map(p => p * p);
console.log(tSquared);
