
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
const replace3ToFizz = (index) => index % 3 === 0 ? `Fizz` : index;
// number 5 will be replaced by Buzz
const replace5ToBuzz = (index) => index % 5 === 0 ? `Buzz` : index;
// 既能被3整除、又能被5整除的数则替换成“FizzBuzz”。
const replace3Plus5ToFizzBuzz = (index) => index % 15 === 0 ? `FizzBuzz` : index;

function test(){
    const cases = [
        // replace3ToFizz
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

        // replace5ToBuzz
        , {
            input: [1, 6, `,`, replace5ToBuzz],
            expect: `1,2,3,4,Buzz,6`
        }

        // replace3Plus5ToFizzBuzz
        ,{
            input: [1, 15, null, replace3Plus5ToFizzBuzz],
            expect: `1 2 3 4 5 6 7 8 9 10 11 12 13 14 FizzBuzz`
        }

        // replace3ToFizz first, then replace5ToBuzz
        ,{
            input: [1, 15, null, (index) => {
                let ret = replace3ToFizz(index);
                if(ret === index) {
                    ret = replace5ToBuzz(index);
                }

                return ret;
            }],
            expect: `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz`
        }
    ];

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

test();


