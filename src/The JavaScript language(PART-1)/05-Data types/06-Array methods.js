let arr = [1, 2, 3, 4, 5];

let doubled = arr.map(n => n * 2);
console.log(doubled);

let evens = arr.filter(n => n % 2 === 0);
console.log(evens);

let sum = arr.reduce((acc, n) => acc + n, 0);
console.log(sum);

arr.forEach(n => console.log("Item:", n));
