const mappingJson = require('./mapping.json');
import jp = require('jsonpath');
import fs = require('fs');
import path = require('path');

const mapping: { [key: string]: string } = mappingJson;
// Game files -> ISO Language Codes
const langMap: Map<string, string> = new Map([
    ['ara', 'ar'], // Arabic
    ['bra', 'pt-br'], // Portuguese (Brazil)
    ['chi', 'zh'], // Chinese
    ['cro', 'hr'], // Croatian
    ['cze', 'cs'], // Czech
    ['dan', 'da'], // Danish
    ['dut', 'nl'], // Dutch
    ['eng', 'en'], // English
    ['fin', 'fi'], // Finnish
    ['fre', 'fr'], // French
    ['ger', 'de'], // German
    ['gre', 'el'], // Greek
    ['hun', 'hu'], // Hungarian
    ['ita', 'it'], // Italian
    ['jpn', 'ja'], // Japanese
    ['kor', 'ko'], // Korean
    ['mex', 'es-mx'], // Spanish (Mexico)
    ['nor', 'no'], // Norwegian
    ['pol', 'pl'], // Polish
    ['por', 'pt'], // Portuguese
    ['rus', 'ru'], // Russian
    ['spa', 'es'], // Spanish
    ['swe', 'sv'], // Swedish
    ['tur', 'tr'], // Turkish
]);

const commentStart: string = '/****';
const emptyValue: string = '__EMPTY';

for (let pair of langMap) {
    const inputFile = `${pair[0]}.json`;
    const outputFile = `${pair[1]}.json`;
    console.log(`Converting ${inputFile} to ${outputFile}...`);

    let result: any = {};

    let input: { [key: string]: string } = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, `./input/${inputFile}`), 'utf8')
    );

    for (let key in mapping) {
        // Comment
        if (key.startsWith(commentStart)) {
            continue;
        }

        const path = key.split('.');
        let ref: any = result;
        for (let i = 0; i < path.length; i++) {
            if (i === path.length - 1) {
                // Set the value
                if (mapping[key] === emptyValue) {
                    ref[path[i]] = '';
                } else {
                    ref[path[i]] = input[mapping[key]];
                }
            } else {
                if (ref[path[i]] === undefined) {
                    ref[path[i]] = {};
                }

                // Get the next subPath
                ref = ref[path[i]];
            }
        }
    }

    fs.writeFileSync(
        path.resolve(__dirname, `../src/assets/i18n/${outputFile}`),
        JSON.stringify(result)
    );
}
