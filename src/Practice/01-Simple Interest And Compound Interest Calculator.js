const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function toNumber(input) {
    const n = Number(input);
    if (Number.isNaN(n)) return null;
    return n;
}

function simpleInterest(P, R, T) {
    return (P * R * T) / 100;
}

function compoundInterest(P, R, T, n = 1) {
    const amount = P * Math.pow(1 + (R / 100) / n, n * T);
    return {
        amount,
        interest: amount - P
    };
}

function ask(question) {
    return new Promise(resolve => rl.question(question, ans => resolve(ans)));
}

(async function main() {
    console.log('Simple Interest & Compound Interest Calculator\n');

    const pIn = await ask('Principal (P): ');
    const rIn = await ask('Annual Rate (%) (R): ');
    const tIn = await ask('Time (years) (T): ');
    const nIn = await ask('Compounds per year (n) [default 1]: ');

    const P = toNumber(pIn);
    const R = toNumber(rIn);
    const T = toNumber(tIn);
    const n = toNumber(nIn) || 1;

    if (P === null || R === null || T === null) {
        console.error('Invalid input. Please enter numeric values for P, R, and T.');
        rl.close();
        process.exit(1);
    }

    const si = simpleInterest(P, R, T);
    const ci = compoundInterest(P, R, T, n);

    console.log('\nResults:');
    console.log(`Simple Interest: ${si.toFixed(2)}`);
    console.log(`Amount with Simple Interest: ${(P + si).toFixed(2)}`);
    console.log(`Compound Interest (n=${n}): ${ci.interest.toFixed(2)}`);
    console.log(`Amount with Compound Interest: ${ci.amount.toFixed(2)}`);

    rl.close();
})();
