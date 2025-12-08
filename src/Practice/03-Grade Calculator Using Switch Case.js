const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = q => new Promise(res => rl.question(q, ans => res(ans.trim())));

function toNumber(input) {
    const n = Number(input);
    if (Number.isNaN(n)) return null;
    return n;
}

(async function main() {
    console.log('Grade Calculator (using switch-case)\n');

    const marksIn = await ask('Enter marks (0-100): ');
    const marks = toNumber(marksIn);

    if (marks === null || marks < 0 || marks > 100) {
        console.error('Invalid input. Enter a number between 0 and 100.');
        rl.close();
        process.exit(1);
    }

    const bucket = Math.floor(marks / 10);
    let grade, remark;

    switch (bucket) {
        case 10:
        case 9:
            grade = 'A+';
            remark = 'Excellent';
            break;
        case 8:
            grade = 'A';
            remark = 'Very Good';
            break;
        case 7:
            grade = 'B';
            remark = 'Good';
            break;
        case 6:
            grade = 'C';
            remark = 'Average';
            break;
        case 5:
            grade = 'D';
            remark = 'Below Average';
            break;
        default:
            grade = 'F';
            remark = 'Fail';
    }

    console.log(`\nMarks: ${marks}`);
    console.log(`Grade: ${grade}`);
    console.log(`Remark: ${remark}`);

    rl.close();
})();