const getFirstName = (name) => {
    return name.split(' ')[0]
};

console.log(getFirstName('Randags Gowlland'));

const getName = (name) => name.split(' ')[0];
console.log(getName('Lee Mead'));

const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
