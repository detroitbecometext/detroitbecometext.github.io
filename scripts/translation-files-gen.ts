/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';

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

type IJsonObject = { [key: string]: string | IJsonObject };

// Adapted from https://stackoverflow.com/questions/45709346/comparing-the-keys-of-two-javascript-objects
/**
 * Prints the difference betweens the keys of two objects.
 * @param object1 The first object
 * @param object2 The second object
 */
const compareObjects = (object1: IJsonObject, object2: IJsonObject): void => {
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

	function showDiff(set1: Set<string>, set2: Set<string>): void {
		const diff1 = new Set([...set1].filter((x) => !set2.has(x)));
		const diff2 = new Set([...set2].filter((x) => !set1.has(x)));

		if (diff1.size === 0 && diff2.size === 0) {
			console.log('No difference.');
			return;
		}

		console.log(
			'Keys not in target: ',
			[...diff1].map((x) => x.replaceAll('.', '_')),
		);
		console.log(
			'Keys not in reference: ',
			[...diff2].map((x) => x.replaceAll('.', '_')),
		);
	}

	const o1Keys: Set<string> = new Set<string>();
	const o2Keys: Set<string> = new Set<string>();
	getAllKeyNames(object1, o1Keys, 'BASE');
	getAllKeyNames(object2, o2Keys, 'BASE');

	showDiff(o1Keys, o2Keys);
};

/**
 * Fix some translation files formatting issues.
 * @param lang The language of the file
 * @param result The translation file object
 */
const standardizeFile = (lang: string, result: IJsonObject): void => {
	if (
		[
			'ar',
			'zh',
			'cs',
			'da',
			'nl',
			'fi',
			'fr',
			'de',
			'el',
			'hu',
			'it',
			'es-mx',
			'no',
			'pl',
			'pt',
			'ru',
			'es',
			'sv',
			'tr',
		].includes(lang)
	) {
		// Missing a {B} delimiter
		const value = (result as any)['X0101X']['TERRACE']['PARTI']['PC'][
			'X01HOSTAGE'
		]['HOSTAGEV2'];
		(result as any)['X0101X']['TERRACE']['PARTI']['PC']['X01HOSTAGE'][
			'HOSTAGEV2'
		] = {
			'1': value,
			'2': '',
		};
	}

	if (lang === 'ja') {
		// Has an additional {B} delimiter so merge the two together
		const value =
			(result as any)['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY'][
				'PEACEFUL'
			]['1'] +
			(result as any)['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY'][
				'PEACEFUL'
			]['2'];
		(result as any)['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY'][
			'PEACEFUL'
		] = value;

		// Missing a {B} delimiter, so add additional object property
		(result as any)['X0502K']['BATHROOM']['BORING']['FA'][
			'X05KANDROIDBATH'
		]['END']['5'] = '';
	}

	if (['ar', 'el', 'es-mx', 'ru', 'es'].includes(lang)) {
		(result as any)['X1202C']['OFFICE']['JERICHOINFO']['PC']['X12CCONNOR'][
			'EMPATHY'
		]['3'] = '';
		(result as any)['X1202C']['OFFICE']['JERICHOINFO']['PC']['X12CCONNOR'][
			'EMPATHY'
		]['4'] = '';
	}

	if (['ar', 'zh', 'tr'].includes(lang)) {
		(result as any)['X0602C']['TV']['NEWS']['PC']['X06CBRINKLEY'][
			'RUSSIANCONFLICT'
		]['4'] = '';
	}

	if (['de', 'cs'].includes(lang)) {
		const currentValue = (result as any)['X0302C']['FOWLER']['MEET']['PC'][
			'X03CFOWLER'
		]['JOB02'];
		const nextValue = {
			'1': currentValue['1'] + currentValue['2'],
			'2': currentValue['3'],
			'3': currentValue['4'],
			'4': currentValue['5'],
			'5': currentValue['6'],
		};
		(result as any)['X0302C']['FOWLER']['MEET']['PC']['X03CFOWLER'][
			'JOB02'
		] = nextValue;
	}

	if (lang === 'pl') {
		const currentValue = (result as any)['X0911K']['CAMP']['INTRO']['PC'][
			'X09KKARA'
		]['SINCERE'];
		(result as any)['X0911K']['CAMP']['INTRO']['PC']['X09KKARA'][
			'SINCERE'
		] = {
			'1': '',
			'2': currentValue,
		};
	}

	if (lang === 'nl') {
		const currentValue = (result as any)['X0101X']['ALLEN']['TOPO']['PC'][
			'X01SWATCAPTAIN'
		]['NEGOCIATORV2'];
		(result as any)['X0101X']['ALLEN']['TOPO']['PC']['X01SWATCAPTAIN'][
			'NEGOCIATORV2'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': '',
			'5': currentValue['4'],
		};
	}

	if (lang === 'el') {
		const currentValue = (result as any)['X0703M']['TV']['NEWS']['PC'][
			'X07MWEBB'
		]['CYBERLIFE'];
		(result as any)['X0703M']['TV']['NEWS']['PC']['X07MWEBB']['CYBERLIFE'] =
			{
				'1': currentValue['1'] + currentValue['2'],
				'2': currentValue['3'],
				'3': '',
				'4': currentValue['6'],
				'5': currentValue['7'],
			};
	}

	if (lang === 'ru') {
		let currentValue = (result as any)['X0101K']['INTRO']['LIME']['PC'][
			'X01KSELLER01'
		]['MODELS01'];
		(result as any)['X0101K']['INTRO']['LIME']['PC']['X01KSELLER01'][
			'MODELS01'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': currentValue['4'],
			'5': currentValue['5'] + currentValue['6'],
			'6': currentValue['7'],
			'7': currentValue['8'],
			'8': currentValue['9'],
		};

		currentValue = (result as any)['X0916K']['QUEUE']['LUTHERSACRIFICE'][
			'PC'
		]['X09KCUSTOMSOFFICER']['LUTHERDEADSOLDIER'];
		(result as any)['X0916K']['QUEUE']['LUTHERSACRIFICE']['PC'][
			'X09KCUSTOMSOFFICER'
		]['LUTHERDEADSOLDIER'] = {
			'1': '',
			'2': currentValue['1'],
			'3': currentValue['2'],
			'4': currentValue['3'],
			'5': currentValue['4'],
			'6': currentValue['5'],
		};

		currentValue = (result as any)['X0202A']['TV']['NEWS02']['PC'][
			'X02ATVCARTLAND'
		]['ALARMING'];
		(result as any)['X0202A']['TV']['NEWS02']['PC']['X02ATVCARTLAND'][
			'ALARMING'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': '',
		};
	}

	if (['ru', 'es'].includes(lang)) {
		(result as any)['X0916K']['QUEUE']['KARASACRIFICE']['VO'][
			'X09KSOLDIERBORDER06'
		]['KARADEADLUTSOLD'] = {
			'1': '',
			'2': '',
		};
	}

	if (lang === 'es') {
		let currentValue = (result as any)['X0904M']['CARLHOUSE']['LEO']['PC'][
			'X09MLEO'
		]['VIDEO'];
		(result as any)['X0904M']['CARLHOUSE']['LEO']['PC']['X09MLEO'][
			'VIDEO'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': currentValue['4'],
			'5': currentValue['5'],
			'6': currentValue['6'],
			'7': currentValue['7'],
			'8': currentValue['8'],
			'9': currentValue['9'],
			'10': '',
			'11': currentValue['10'],
			'12': currentValue['11'],
		};

		currentValue = (result as any)['X0802M']['TRUCK']['GAMEOVER']['PC'][
			'X08MMARLA'
		]['DEADENDV2'];
		(result as any)['X0802M']['TRUCK']['GAMEOVER']['PC']['X08MMARLA'][
			'DEADENDV2'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': currentValue['4'],
			'5': currentValue['5'],
			'6': currentValue['6'],
			'7': currentValue['7'],
			'8': currentValue['8'],
			'9': currentValue['9'],
			'10': '',
		};

		currentValue = (result as any)['X0302C']['HARVEY']['TALK']['PC'][
			'X03CCONNOR'
		]['CONNORDEAD'];
		(result as any)['X0302C']['HARVEY']['TALK']['PC']['X03CCONNOR'][
			'CONNORDEAD'
		] = {
			'1': currentValue,
			'2': '',
		};

		currentValue = (result as any)['X0304K']['MOTEL']['WELCOME']['PC'][
			'X03KKARA'
		]['CAR'];
		(result as any)['X0304K']['MOTEL']['WELCOME']['PC']['X03KKARA']['CAR'] =
			{
				'1': '',
				'2': currentValue,
			};

		currentValue = (result as any)['X0405K']['CHASEV2']['PART02']['FA'][
			'X04KCOP01'
		]['NOTICE01'];
		(result as any)['X0405K']['CHASEV2']['PART02']['FA']['X04KCOP01'][
			'NOTICE01'
		] = {
			'1': currentValue,
			'2': '',
		};

		currentValue = (result as any)['X0703M']['TV']['NEWS']['PC'][
			'X07MBRINKLEY'
		]['INTERNATIONAL'];
		(result as any)['X0703M']['TV']['NEWS']['PC']['X07MBRINKLEY'][
			'INTERNATIONAL'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': '',
			'4': currentValue['3'],
			'5': currentValue['4'],
			'6': currentValue['5'],
		};

		currentValue = (result as any)['X0703M']['BROADCAST']['MESSAGE']['PC'][
			'X07MMARLA'
		]['RECORDSTART'];
		(result as any)['X0703M']['BROADCAST']['MESSAGE']['PC']['X07MMARLA'][
			'RECORDSTART'
		] = {
			'1': currentValue,
			'2': '',
		};

		currentValue = (result as any)['X0703M']['BROADCAST']['ALERT']['PC'][
			'X07MMARLA'
		]['SIMONKILLED01'];
		(result as any)['X0703M']['BROADCAST']['ALERT']['PC']['X07MMARLA'][
			'SIMONKILLED01'
		] = {
			'1': currentValue,
			'2': '',
		};

		currentValue = (result as any)['X1102C']['OUTSIDE']['OUTRO']['PC'][
			'X11CCONNOR'
		]['NOSHOOT'];
		(result as any)['X1102C']['OUTSIDE']['OUTRO']['PC']['X11CCONNOR'][
			'NOSHOOT'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': '',
			'4': currentValue['3'],
			'5': currentValue['4'],
			'6': currentValue['5'],
		};
	}
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

		standardizeFile(pair[1], result);

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
		console.log(lang, ': ');
		console.log('---');
		compareObjects(refFile, comparedFile);
		console.log('');
	}
};

writeFiles();
checkFiles();
