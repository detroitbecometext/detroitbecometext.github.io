import fs = require('fs');
import path = require('path');

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

/**
 * Splits the value if necessary.
 * @param value The translated value.
 * @returns A string array.
 */
const format = (value: string): string[] => {
    // ex: {*3} or {*3-4} or {3*} or {B} or {*TC:12|23}
    let indexRegex = new RegExp(
        '{\\*\\d*}|{\\*\\d*-\\d*}|{\\d*\\*}|{B}|(?:{\\*TC:\\d*\\|\\d*})',
        'g'
    );
    // ex: text/info/text-to-remove
    let infoRegex = new RegExp('/info/(.*)$', 'g');

    let result;
    if (!indexRegex.test(value)) {
        // nothing to do
        result = [value];
    } else {
        result = value.split(indexRegex).filter((v) => v !== '');
    }

    result = result.map((r) => r.replace(infoRegex, ''));

    return result;
};

for (let pair of langMap) {
    const inputFile = `${pair[0]}.json`;
    const outputFile = `${pair[1]}.json`;
    console.log(`Converting ${inputFile} to ${outputFile}...`);

    let result: any = {};

    let input: { [key: string]: string } = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, `./input/${inputFile}`), 'utf8')
    );

    for (let translationKey in input) {
        const path = translationKey.split('_');
        let ref: any = result;

        for (let i = 0; i < path.length; i++) {
            if (i === path.length - 1) {
                // Set the value
                let values: string[] = format(input[translationKey]);
                let currentKey = path[i];

                if (values.length === 1) {
                    ref[currentKey] = values[0];
                } else {
                    ref[currentKey] = {};
                    for (let j = 0; j < values.length; j++) {
                        ref[currentKey][j + 1] = values[j];
                    }
                }
            } else {
                let currentKey = path[i];
                if (ref[currentKey] === undefined) {
                    ref[currentKey] = {};
                } else if (
                    typeof ref[currentKey] === 'string' ||
                    ref[currentKey] instanceof String
                ) {
                    // if this path already has a value, create a new sub-object
                    let stringValue = ref[currentKey];
                    ref[currentKey] = {
                        VALUE: stringValue,
                    };
                }

                // Get the next subPath
                ref = ref[currentKey];
            }
        }
    }

    fs.writeFileSync(
        path.resolve(__dirname, `../src/assets/i18n/${outputFile}`),
        JSON.stringify(result)
    );
}
