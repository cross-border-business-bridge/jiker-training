
// 2.将其中3的倍数替换成“Fizz”，

/**
 *
 * @param from
 * @param to
 * @param sp
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



function test(number, by){

    const targetValueFunc = (index) => index % number === 0 ? by : index;

    const cases = [
        {
            input: [1, 5, null, targetValueFunc],
            expect: `1 2 ${by} 4 5`
        }, {
            input: [1, 5, `,`],
            expect: `1,2,3,4,5`
        }, {
            input: [1, 1],
            expect: `1`
        }, {
            input: [2, 1],
            expect: ``
        }, {
            input: [-2, 2],
            expect: `1 2`
        }, {
            input: [0, 1],
            expect: `1`
        }, {
            input: [1, 5, ''],
            expect: `12345`
        }, {
            input: [1, 5, null],
            expect: `1 2 3 4 5`
        }, {
            input: [1, 5, undefined],
            expect: `1 2 3 4 5`
        }
    ];

    // for(const {} of cases)
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

test(3, 'Fizz');



