/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from 'fs';
import path from 'path';
import { standardizeFile } from './utils';

type IJsonObject = { [key: string]: string | IJsonObject };

// Game files -> ISO Language Codes
const langMap: Map<string, string> = new Map<string, string>([
	['ara', 'ar'], // Arabic
	['bra', 'pt-br'], // Portuguese (Brazil)
	['chi', 'zh-tw'], // Traditional Chinese
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
	['sch', 'zh-cn'], // Simplified Chinese
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
	// ex: {*3} or {*3-4} or {3*} or {B} or {Β} (greek B) or {*TC:12|23}
	const indexRegex =
		/{\*\d*}|{\*\d*-\d*}|{\d*\*}|{B}|{Β}|(?:{\*TC:\d*\|\d*})/g;
	// ex: text/info/text-to-remove
	const infoRegex = /\/info\/(.*)$/g;

	let result: string[];
	if (!indexRegex.test(value)) {
		// nothing to do
		result = [value];
	} else {
		result = value.split(indexRegex);
		result.splice(0, 1);
	}

	result = result.map((r) => r.replace(infoRegex, ''));

	return result;
};

// Adapted from https://stackoverflow.com/questions/45709346/comparing-the-keys-of-two-javascript-objects
/**
 * Prints the difference betweens the keys of two objects.
 * @param object1 The first object
 * @param object2 The second object
 */
const compareObjects = (
	object1: IJsonObject,
	object2: IJsonObject,
): string | null => {
	function getAllKeyNames(
		object: IJsonObject,
		keys: Set<string>,
		string: string,
	) {
		for (const key in object) {
			if (typeof object[key] === 'object') {
				getAllKeyNames(
					object[key] as IJsonObject,
					keys,
					`${string}.${key}`,
				);
			}

			keys.add(`${string}.${key}`);
		}
	}

	function getDiff(set1: Set<string>, set2: Set<string>): string | null {
		const diff1 = new Set([...set1].filter((x) => !set2.has(x)));
		const diff2 = new Set([...set2].filter((x) => !set1.has(x)));

		if (diff1.size === 0 && diff2.size === 0) {
			return null;
		}

		const toString = (set: Set<string>): string => {
			return [...set]
				.map((x) => x.replaceAll('.', '_').replace('BASE_', ''))
				.join('\n\t');
		};

		return (
			'Keys not in target: \n\t' +
			toString(diff1) +
			'\n' +
			'Keys not in reference: \n\t' +
			toString(diff2)
		);
	}

	const o1Keys: Set<string> = new Set<string>();
	const o2Keys: Set<string> = new Set<string>();
	getAllKeyNames(object1, o1Keys, 'BASE');
	getAllKeyNames(object2, o2Keys, 'BASE');

	return getDiff(o1Keys, o2Keys);
};

/**
 * Format and write the translation files.
 */
const writeFiles = () => {
	for (const pair of langMap) {
		const inputFile = `${pair[0]}.json`;
		const outputFile = `${pair[1]}.json`;
		console.log(`Converting ${inputFile} to ${outputFile}...`);

		const result: any = {};

		const input: Record<string, string> = JSON.parse(
			fs.readFileSync(
				path.resolve(__dirname, `./input/${inputFile}`),
				'utf8',
			),
		);

		for (const translationKey in input) {
			const path = translationKey.split('_');
			let ref: any = result;

			for (let i = 0; i < path.length; i++) {
				if (i === path.length - 1) {
					// Set the value
					const values: string[] = format(input[translationKey]);
					const currentKey = path[i];

					if (values.length === 1) {
						ref[currentKey] = values[0];
					} else {
						ref[currentKey] = {};
						for (let j = 0; j < values.length; j++) {
							ref[currentKey][j + 1] = values[j];
						}
					}
				} else {
					const currentKey = path[i];
					if (ref[currentKey] === undefined) {
						ref[currentKey] = {};
					} else if (
						typeof ref[currentKey] === 'string' ||
						ref[currentKey] instanceof String
					) {
						// if this path already has a value, create a new sub-object
						const stringValue = ref[currentKey];
						ref[currentKey] = {
							VALUE: stringValue,
						};
					}

					// Get the next subPath
					ref = ref[currentKey];
				}
			}
		}

		standardizeFile(result);

		fs.writeFileSync(
			path.resolve(__dirname, `../public/i18n/${outputFile}`),
			JSON.stringify(result, null, '\t'),
		);
	}
};

/**
 * Check the translation files.
 */
const checkFiles = () => {
	// Clear output folder
	fs.readdirSync(path.resolve(__dirname, './output')).forEach((file) => {
		fs.unlinkSync(path.resolve(__dirname, `./output/${file}`));
	});

	const refFile = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, `../public/i18n/en.json`), {
			encoding: 'utf-8',
		}),
	);

	for (const lang of langMap.values()) {
		const comparedFile = JSON.parse(
			fs.readFileSync(
				path.resolve(__dirname, `../public/i18n/${lang}.json`),
				{ encoding: 'utf-8' },
			),
		);

		const result = compareObjects(refFile, comparedFile);

		if (result != null) {
			fs.writeFileSync(
				path.resolve(__dirname, `./output/${lang}.txt`),
				result,
			);
		}
	}
};

writeFiles();
checkFiles();
