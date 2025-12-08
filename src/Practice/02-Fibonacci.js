const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (q) => new Promise(res => rl.question(q, ans => res(ans.trim())));

function toInteger(input) {
    const n = Number(input);
    if (!Number.isFinite(n) || Math.floor(n) !== n || n < 0) return null;
    return n;
}

// iterative using BigInt
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    let a = 0n, b = 1n;
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

(async function main() {
    console.log('Fibonacci Calculator\n');

    const nIn = await ask('Enter n (non-negative integer): ');
    const n = toInteger(nIn);
    if (n === null) {
        console.error('Invalid input. Provide a non-negative integer.');
        rl.close();
        process.exit(1);
    }

    const mode = (await ask("Mode — 'value' (nth Fibonacci) or 'sequence' (first n terms) [default value]: ")).toLowerCase() || 'value';

    if (mode === 'sequence') {
        if (n === 0) {
            console.log('[]');
        } else {
            const seq = [];
            for (let i = 0; i < n; i++) seq.push(fib(i).toString());
            console.log(`[ ${seq.join(', ')} ]`);
        }
    } else {
        console.log(`F(${n}) = ${fib(n).toString()}`);
    }

    rl.close();
})();