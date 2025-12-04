let now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1); // 0-based
console.log(now.getDate());
console.log(now.getHours(), now.getMinutes(), now.getSeconds());

// Create specific date
let birthday = new Date(2000, 0, 15); // 15 Jan 2000
console.log(birthday.toDateString());
