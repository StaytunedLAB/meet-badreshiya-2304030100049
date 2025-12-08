const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = q => new Promise(res => rl.question(q, ans => res(ans.trim())));

function toInteger(input) {
    const n = Number(input);
    if (!Number.isFinite(n) || Math.floor(n) !== n) return null;
    return n;
}

function isLeapYear(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    return year % 400 === 0;
}

(async function main() {
    const yIn = await ask('Enter year (e.g., 2024): ');
    const year = toInteger(yIn);

    if (year === null || year < 1) {
        console.error('Invalid input. Provide a positive integer year.');
        rl.close();
        process.exit(1);
    }

    console.log(`${year} is ${isLeapYear(year) ? '' : 'not '}a leap year.`);
    rl.close();
})();