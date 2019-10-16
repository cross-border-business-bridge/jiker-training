

function parser(commandLine) {

}

function test(){
    const cases = [
        {
            commandLine: `curl   -x   http://proxy:8080   -L   https://remote.com/index.html -vk`,
            expect: {
                command: 'curl',
                x: 'http://proxy:8080',
                L: 'https://remote.com/index.html',
                v: true,
                k: true
            }
        }
    ];

    for(let index in cases) {
        const {input, expect} = cases[index];
        const output = parser.apply(this, input);
        if(output === expect) {
            console.log(`[pass] #${index} input=${input}`);
        }
        else {
            console.error(`[fail] #${index} input=${input} \n\toutput=${output} \n\texpect=${expect}`);
        }
    }
}

test();
