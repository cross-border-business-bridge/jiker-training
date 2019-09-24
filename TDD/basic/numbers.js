
// 1.打印出从1到100的数字，

/**
 *
 * @param from
 * @param to
 * @param seperator
 * @returns {string}
 */
function numbers(from, to, seperator=' ') {
    let out = '',
        i = from;

    while(i <= to) {
        if(i >= 1 && i <= 100) {
            out += i + seperator;
        }

        ++i;
    }

    if(seperator && seperator.length)
        return (out && out.substring(0, out.length - 1)) || '';

    return out;
}

function test(){
    const cases = [
        {
            input: [1, 5],
            expect: `1 2 3 4 5`
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
            expect: `12345`
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
            console.error(`[fail] #${index} input=${input} output=${output} expect=${expect}`);
        }
    }
}

test();

