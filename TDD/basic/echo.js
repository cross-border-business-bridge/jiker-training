
// 2.将其中3的倍数替换成“Fizz”，

/**
 *
 * @param from
 * @param to
 * @param sp
 * @param func  replace rule
 * @returns {string}
 */
function numbers(from, to, sp, func) {
    let out = '',
        i = from;

    // sp = typeof sp !== 'undefined' ? sp : ' '; // default
    if(!sp) {
        if(sp === '') {
            sp = '';
        }
        else {
            sp = ' ';
        }
    }

    func = typeof func === 'function' ? func : (index) => index;

    while(i <= to) {
        if(i >= 1 && i <= 100) {
            out += func(i) + sp;
        }

        ++i;
    }

    if(sp && sp.length)
        return (out && out.substring(0, out.length - 1)) || '';

    return out;
}


// number 3 will be replaced by Fizz
function test3ToFizz(){
    const replace3ToFizz = (index) => index % 3 === 0 ? `Fizz` : index;

    const cases = [
        {
            input: [1, 5, null, replace3ToFizz],
            expect: `1 2 Fizz 4 5`
        }, {
            input: [1, 5, `,`],
            expect: `1,2,3,4,5`
        }, {
            input: [1, 6, `,`, replace3ToFizz],
            expect: `1,2,Fizz,4,5,Fizz`
        }, {
            input: [1, 1],
            expect: `1`
        }
    ];

    verifyTestResults(cases);
}

// number 5 will be replaced by Buzz
function test5ToBuzz(){
    const replace5ToBuzz = (index) => index % 5 === 0 ? `Buzz` : index;

    const cases = [
        {
            input: [1, 5, null, replace5ToBuzz],
            expect: `1 2 Buzz 4 5`
        }, {
            input: [1, 5, `,`],
            expect: `1,2,3,4,5`
        }, {
            input: [1, 6, `,`, replace5ToBuzz],
            expect: `1,2,Buzz,4,5,Buzz`
        }, {
            input: [1, 1],
            expect: `1`
        }
    ];

    verifyTestResults(cases);
}

function verifyTestResults(cases) {
    for(let index in cases) {
        const {input, expect} = cases[index];
        const output = numbers.apply(this, input);
        if(output === expect) {
            console.log(`[pass] #${index} input=${input}`);
        }
        else {
            console.error(`[fail] #${index} input=${input} \n\toutput=${output} \n\texpect=${expect}`);
        }
    }
}

test3ToFizz();
test5ToBuzz();


