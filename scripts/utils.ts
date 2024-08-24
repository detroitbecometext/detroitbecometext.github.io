/* eslint-disable @typescript-eslint/no-explicit-any */

function isString(value: any): value is string {
	return typeof value === 'string';
}

function isObject(value: any, length: number): value is Record<string, string> {
	return typeof value !== 'string' && Object.keys(value).length === length;
}

function fixX0101X(result: any): void {
	let currentValue;

	// == X0101X_TERRACE ==
	currentValue =
		result['X0101X']['TERRACE']['PARTI']['PC']['X01HOSTAGE']['HOSTAGEV2'];

	if (isString(currentValue)) {
		// Missing a {B} delimiter
		result['X0101X']['TERRACE']['PARTI']['PC']['X01HOSTAGE']['HOSTAGEV2'] =
			{
				'1': currentValue,
				'2': '',
			};
	}

	if (
		result['X0101X']['TERRACE']['PARTI']['PC']['X01ANDROID']['FEELINGSV2'][
			'7'
		] === undefined
	) {
		result['X0101X']['TERRACE']['PARTI']['PC']['X01ANDROID']['FEELINGSV2'][
			'7'
		] = '';
	}

	// == X0101X_ALLEN ==
	currentValue =
		result['X0101X']['ALLEN']['TOPO']['PC']['X01SWATCAPTAIN'][
			'NEGOCIATORV2'
		];

	if (isObject(currentValue, 4)) {
		result['X0101X']['ALLEN']['TOPO']['PC']['X01SWATCAPTAIN'][
			'NEGOCIATORV2'
		] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': '',
			'5': currentValue['4'],
		};
	}

	// == X0101X_ONON ==
	if (result['X0101X']['ONON'] === undefined) {
		result['X0101X']['ONON'] = {
			ANDROID: {
				FA: {
					DD: {
						X01ANDROID: {
							SHOOT: '',
						},
					},
				},
			},
		};
	}

	// == X0101X_SWAT_CHECKGUN ==
	if (result['X0101X']['SWAT']['CHECKGUN'] === undefined) {
		result['X0101X']['SWAT']['CHECKGUN'] = {
			VO: {
				X01SWAT09: {
					ROGER: '',
					COPY: '',
				},
			},
		};
	}

	// == X0101X_SWAT_HELICOARRIVAL ==
	if (result['X0101X']['SWAT']['HELICOARRIVAL'] === undefined) {
		result['X0101X']['SWAT']['HELICOARRIVAL'] = {
			VO: {
				X01HELIPILOT: {
					THREAT01: '',
					THREAT02: '',
				},
			},
		};
	}

	// == X0101X_SWAT_LOWERGUN ==
	if (result['X0101X']['SWAT']['LOWERGUN'] === undefined) {
		result['X0101X']['SWAT']['LOWERGUN'] = {
			VO: {
				X01SWAT01: {
					SAFE: '',
				},
			},
		};
	}

	// == X0101X_SWAT_SIGNS ==
	if (result['X0101X']['SWAT']['SIGNS'] === undefined) {
		result['X0101X']['SWAT']['SIGNS'] = {
			VO: {
				X01SWAT07: {
					SETUP01: '',
				},
				X01SWAT09: {
					SETUP02: '',
					SETUP03: '',
					SETUP04: '',
				},
			},
		};
	}

	// == X0101X_SWAT_SNIPERSHOT ==
	if (result['X0101X']['SWAT']['SNIPERSHOT'] === undefined) {
		result['X0101X']['SWAT']['SNIPERSHOT'] = {
			VO: {
				X01SNIPER01: {
					CLEAR: '',
				},
				X01RADIO: {
					NOW: '',
				},
			},
		};
	}

	// == X0101X_SWAT_SNIPEWAIT ==
	if (result['X0101X']['SWAT']['SNIPEWAIT'] === undefined) {
		result['X0101X']['SWAT']['SNIPEWAIT'] = {
			VO: {
				X01SNIPER06: {
					CLEAR: '',
				},
				X01RADIO: {
					WAIT: '',
					OVER: '',
				},
			},
		};
	}

	// == X0101X_SWAT_SWAT01MOVES ==
	if (result['X0101X']['SWAT']['SWAT01MOVES'] === undefined) {
		result['X0101X']['SWAT']['SWAT01MOVES'] = {
			VO: {
				X01SWAT02: {
					MOVE: '',
				},
				X01SWAT01: {
					SWITCH: '',
				},
			},
		};
	}
}

function fixX0703M(result: any): void {
	let currentValue;

	// == X0703M_TV ==
	currentValue =
		result['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY']['PEACEFUL'];

	if (isObject(currentValue, 2)) {
		// Has an additional {B} delimiter so merge the two together
		currentValue =
			result['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY'][
				'PEACEFUL'
			]['1'] +
			result['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY'][
				'PEACEFUL'
			]['2'];

		result['X0703M']['TV']['REACTIONS']['PC']['X07MBRINKLEY']['PEACEFUL'] =
			currentValue;
	}

	currentValue =
		result['X0703M']['TV']['NEWS']['PC']['X07MWEBB']['CYBERLIFE'];

	if (isObject(currentValue, 7)) {
		result['X0703M']['TV']['NEWS']['PC']['X07MWEBB']['CYBERLIFE'] = {
			'1': currentValue['1'] + currentValue['2'],
			'2': currentValue['3'],
			'3': '',
			'4': currentValue['6'],
			'5': currentValue['7'],
		};
	}

	currentValue =
		result['X0703M']['TV']['NEWS']['PC']['X07MBRINKLEY']['INTERNATIONAL'];

	if (isObject(currentValue, 5)) {
		result['X0703M']['TV']['NEWS']['PC']['X07MBRINKLEY']['INTERNATIONAL'] =
			{
				'1': currentValue['1'],
				'2': currentValue['2'],
				'3': '',
				'4': currentValue['3'],
				'5': currentValue['4'],
				'6': currentValue['5'],
			};
	}

	// == X0703M_BROADCAST ==
	currentValue =
		result['X0703M']['BROADCAST']['MESSAGE']['PC']['X07MMARLA'][
			'RECORDSTART'
		];

	if (isString(currentValue)) {
		result['X0703M']['BROADCAST']['MESSAGE']['PC']['X07MMARLA'][
			'RECORDSTART'
		] = {
			'1': currentValue,
			'2': '',
		};
	}

	currentValue =
		result['X0703M']['BROADCAST']['ALERT']['PC']['X07MMARLA'][
			'SIMONKILLED01'
		];

	if (isString(currentValue)) {
		result['X0703M']['BROADCAST']['ALERT']['PC']['X07MMARLA'][
			'SIMONKILLED01'
		] = {
			'1': currentValue,
			'2': '',
		};
	}

	// == X0703M_CORRIDOR ==
	if (result['X0703M']['CORRIDOR'] === undefined) {
		result['X0703M']['CORRIDOR'] = {
			RUSE: {
				PC: {
					X07MBROADGUARD01: {
						ARRIVAL: {
							'1': '',
							'2': '',
						},
						CLOSE: '',
						POINT: '',
						TURN: '',
						HIT: '',
					},
					X07MBROADGUARD02: {
						ARRIVAL: '',
						CLOSE: {
							'1': '',
							'2': '',
						},
						POINT: '',
						TURN: '',
						HIT: '',
					},
					X07MCLEANMARKUS: {
						POINT: '',
						TURN: '',
						HIT: '',
					},
					WAIT: {
						CLOSE: '',
					},
					GUN0: {
						POINT: '',
					},
					MPARTURN: {
						TURN: '',
					},
					MPARHIT: {
						KNOCK: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0703M']['CORRIDOR']['RUSE']['PC']['X07MBROADGUARD01'][
				'ARRIVAL'
			];

		if (isString(currentValue)) {
			result['X0703M']['CORRIDOR']['RUSE']['PC']['X07MBROADGUARD01'][
				'ARRIVAL'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0703M']['CORRIDOR']['RUSE']['PC']['X07MBROADGUARD02'][
				'CLOSE'
			];

		if (isString(currentValue)) {
			result['X0703M']['CORRIDOR']['RUSE']['PC']['X07MBROADGUARD02'][
				'CLOSE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}
}

function fixX1202C(result: any): void {
	let currentValue;

	// == X1202C_OFFICE ==
	if (
		result['X1202C']['OFFICE']['JERICHOINFO']['PC']['X12CCONNOR'][
			'EMPATHY'
		]['3'] === undefined
	) {
		result['X1202C']['OFFICE']['JERICHOINFO']['PC']['X12CCONNOR'][
			'EMPATHY'
		]['3'] = '';
	}

	if (
		result['X1202C']['OFFICE']['JERICHOINFO']['PC']['X12CCONNOR'][
			'EMPATHY'
		]['4'] === undefined
	) {
		result['X1202C']['OFFICE']['JERICHOINFO']['PC']['X12CCONNOR'][
			'EMPATHY'
		]['4'] = '';
	}

	if (result['X1202C']['OFFICE']['FAIL'] === undefined) {
		result['X1202C']['OFFICE']['FAIL'] = {
			PC: {
				X12CAMANDA: {
					TOOLATE: '',
				},
				X12CCONNOR: {
					TOOLATE: '',
				},
			},
		};
	} else {
		currentValue =
			result['X1202C']['OFFICE']['FAIL']['PC']['X12CAMANDA']['TOOLATE'];

		if (isObject(currentValue, 2)) {
			result['X1202C']['OFFICE']['FAIL']['PC']['X12CAMANDA']['TOOLATE'] =
				currentValue['1'] + currentValue['2'];
		}

		currentValue =
			result['X1202C']['OFFICE']['FAIL']['PC']['X12CCONNOR']['TOOLATE'];

		if (isObject(currentValue, 2)) {
			result['X1202C']['OFFICE']['FAIL']['PC']['X12CCONNOR']['TOOLATE'] =
				currentValue['1'] + currentValue['2'];
		}
	}

	// == X1202C_EVIDENCEROOM ==

	if (result['X1202C']['EVIDENCEROOM'] === undefined) {
		result['X1202C']['EVIDENCEROOM'] = {
			CURTIS: {
				PC: {
					X12CCONNOR: {
						BACK: '',
						WIN: '',
						LOSE: '',
					},
					X12CCURTIS: {
						BACK: '',
						WIN: '',
						LOSE: '',
					},
					X12CPERKINS: {
						WIN: '',
						LOSE: '',
					},
					X12CFBIAGENT01: {
						WIN: '',
						LOSE: '',
					},
					X12CFBIAGENT02: {
						WIN: '',
						LOSE: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X1202C']['EVIDENCEROOM']['CURTIS']['PC']['X12CCURTIS'][
				'BACK'
			];

		if (isObject(currentValue, 2)) {
			result['X1202C']['EVIDENCEROOM']['CURTIS']['PC']['X12CCURTIS'][
				'BACK'
			] = currentValue['1'] + currentValue['2'];
		}

		currentValue =
			result['X1202C']['EVIDENCEROOM']['CURTIS']['PC']['X12CPERKINS'][
				'WIN'
			];

		if (isObject(currentValue, 2)) {
			result['X1202C']['EVIDENCEROOM']['CURTIS']['PC']['X12CPERKINS'][
				'WIN'
			] = currentValue['1'] + currentValue['2'];
		}
	}

	// == X1202C_EVIDENCE ==
	if (result['X1202C']['EVIDENCE']['TRACY'] === undefined) {
		result['X1202C']['EVIDENCE']['TRACY'] = {
			VO: {
				X12CCONNOR: {
					THINK: '',
				},
			},
			PC: {
				X12CCONNOR: {
					TRACI1AWAKEN: '',
					VIDEOUNSEEN: '',
					VIDEOSEEN: {
						'1': '',
						'2': '',
					},
					TRACI2HEAD: '',
					TRACI2GAMEOVER: '',
				},
				X12CTRACI01: {
					TRACI1AWAKEN: '',
					VIDEOUNSEEN: '',
					VIDEOSEEN: {
						'1': '',
						'2': '',
					},
					TRACI2HEAD: '',
					TRACI2GAMEOVER: '',
				},
				X12CTRACI02: {
					TRACI1AWAKEN: '',
					VIDEOUNSEEN: '',
					VIDEOSEEN: '',
					TRACI2HEAD: {
						'1': '',
						'2': '',
					},
					TRACI2GAMEOVER: '',
				},
			},
		};
	} else {
		currentValue =
			result['X1202C']['EVIDENCE']['TRACY']['PC']['X12CCONNOR'][
				'VIDEOSEEN'
			];

		if (isString(currentValue)) {
			result['X1202C']['EVIDENCE']['TRACY']['PC']['X12CCONNOR'][
				'VIDEOSEEN'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X1202C']['EVIDENCE']['TRACY']['PC']['X12CTRACI01'][
				'VIDEOSEEN'
			];

		if (isString(currentValue)) {
			result['X1202C']['EVIDENCE']['TRACY']['PC']['X12CTRACI01'][
				'VIDEOSEEN'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X1202C']['EVIDENCE']['TRACY']['PC']['X12CTRACI02'][
				'TRACI2HEAD'
			];

		if (isString(currentValue)) {
			result['X1202C']['EVIDENCE']['TRACY']['PC']['X12CTRACI02'][
				'TRACI2HEAD'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X1202C_RUPPERT ==
	if (result['X1202C']['RUPPERT'] === undefined) {
		result['X1202C']['RUPPERT'] = {
			THOUGHT: {
				PC: {
					X12CCONNOR: {
						THOUGHT: '',
					},
				},
			},
		};
	}
}

function fixX0602C(result: any): void {
	// == X0602C_TV ==
	if (
		result['X0602C']['TV']['NEWS']['PC']['X06CBRINKLEY']['RUSSIANCONFLICT'][
			'4'
		] === undefined
	) {
		result['X0602C']['TV']['NEWS']['PC']['X06CBRINKLEY']['RUSSIANCONFLICT'][
			'4'
		] = '';
	}
}

function fixX0302C(result: any): void {
	let currentValue;

	// == X0302C_FOWLER ==
	currentValue =
		result['X0302C']['FOWLER']['MEET']['PC']['X03CFOWLER']['JOB02'];

	if (isObject(currentValue, 6)) {
		const nextValue = {
			'1': currentValue['1'] + currentValue['2'],
			'2': currentValue['3'],
			'3': currentValue['4'],
			'4': currentValue['5'],
			'5': currentValue['6'],
		};
		result['X0302C']['FOWLER']['MEET']['PC']['X03CFOWLER']['JOB02'] =
			nextValue;
	}

	// == X0302C_HARVEY ==
	currentValue =
		result['X0302C']['HARVEY']['TALK']['PC']['X03CCONNOR']['CONNORDEAD'];

	if (isString(currentValue)) {
		result['X0302C']['HARVEY']['TALK']['PC']['X03CCONNOR']['CONNORDEAD'] = {
			'1': currentValue,
			'2': '',
		};
	}

	// == X0302C_OFFICE_COPTALKING ==
	if (result['X0302C']['OFFICE']['COPTALKING'] === undefined) {
		result['X0302C']['OFFICE']['COPTALKING'] = {
			PC: {
				X03CCOP01: {
					TALK: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
				X03CCOP03: {
					TALK: {
						'1': '',
						'2': '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0302C']['OFFICE']['COPTALKING']['PC']['X03CCOP01']['TALK'];

		if (isString(currentValue)) {
			result['X0302C']['OFFICE']['COPTALKING']['PC']['X03CCOP01'][
				'TALK'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0302C']['OFFICE']['COPTALKING']['PC']['X03CCOP03']['TALK'];

		if (isString(currentValue)) {
			result['X0302C']['OFFICE']['COPTALKING']['PC']['X03CCOP03'][
				'TALK'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0302C_CELLS_ANDGAMEVOER ==
	if (result['X0302C']['CELLS']['ANDGAMEVOER'] === undefined) {
		result['X0302C']['CELLS']['ANDGAMEVOER'] = {
			FA: {
				X03CHARVEY: {
					ANDDEADHARVEY: '',
				},
				X03CCHAD: {
					ANDDEADCHAD: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0302C']['CELLS']['ANDGAMEVOER']['FA']['X03CCHAD'][
				'ANDDEADCHAD'
			];

		if (isString(currentValue)) {
			result['X0302C']['CELLS']['ANDGAMEVOER']['FA']['X03CCHAD'][
				'ANDDEADCHAD'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}

	// == X0302C_CAFETERIA ==
	if (result['X0302C']['CAFETERIA'] === undefined) {
		result['X0302C']['CAFETERIA'] = {
			BULLY: {
				PC: {
					X03CCURTIS: {
						START: {
							'1': '',
							'2': '',
						},
						IGNORE: '',
						APPROACH: '',
						DECLINE: {
							'1': '',
							'2': '',
							'3': '',
						},
						ANSWER: {
							'1': '',
							'2': '',
						},
						ACCEPT: '',
						IGNOREAGAIN: {
							'1': '',
							'2': '',
							'3': '',
						},
						REFUSE: {
							'1': '',
							'2': '',
							'3': '',
						},
					},
					X03CCHAD: {
						START: '',
						IGNORE: '',
						APPROACH: '',
						DECLINE: '',
						ANSWER: '',
						ACCEPT: '',
						IGNOREAGAIN: '',
						REFUSE: '',
					},
					X03CCONNOR: {
						IGNORE: '',
						APPROACH: '',
						DECLINE: {
							'1': '',
							'2': '',
						},
						ANSWER: '',
						ACCEPT: '',
						IGNOREAGAIN: '',
						REFUSE: {
							'1': '',
							'2': '',
						},
					},
					X03CHANK: {
						DECLINE: {
							'1': '',
							'2': '',
						},
						IGNOREAGAIN: {
							'1': '',
							'2': '',
						},
						REFUSE: {
							'1': '',
							'2': '',
						},
					},
					CHOICEGROUP01: {
						APPROACH: '',
						IGNORE: '',
					},
					CHOICEGROUP02: {
						ANSWER: '',
						DECLINE: '',
					},
					CHOICEGROUP03: {
						ACCEPT: '',
						REFUSE: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS']['START'];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'START'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'DECLINE'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'DECLINE'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'ANSWER'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'ANSWER'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'IGNOREAGAIN'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'IGNOREAGAIN'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'REFUSE'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCURTIS'][
				'REFUSE'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCONNOR'][
				'DECLINE'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCONNOR'][
				'DECLINE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCONNOR'][
				'REFUSE'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CCONNOR'][
				'REFUSE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CHANK']['DECLINE'];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CHANK'][
				'DECLINE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CHANK'][
				'IGNOREAGAIN'
			];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CHANK'][
				'IGNOREAGAIN'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CHANK']['REFUSE'];

		if (isString(currentValue)) {
			result['X0302C']['CAFETERIA']['BULLY']['PC']['X03CHANK']['REFUSE'] =
				{
					'1': currentValue,
					'2': '',
				};
		}
	}

	// == X0302C_CONFERENCEROOM ==
	if (result['X0302C']['CONFERENCEROOM'] === undefined) {
		result['X0302C']['CONFERENCEROOM'] = {
			EXIT: {
				PC: {
					X03CCONNOR: {
						OUT01: '',
						OUT02: '',
					},
					X03CDETECTIVE01: {
						OUT01: '',
						OUT02: '',
					},
					X03CDETECTIVE02: {
						OUT01: '',
						OUT02: '',
					},
					X03CANDCONF: {
						OUT01: '',
						OUT02: '',
					},
				},
			},
		};
	}

	// == X0302C_HANK_DEVIANTS ==
	if (result['X0302C']['HANK']['DEVIANTS'] === undefined) {
		result['X0302C']['HANK']['DEVIANTS'] = {
			PC: {
				X03CCONNOR: {
					DEVIANTS: '',
					MPARSITDOWN: '',
				},
				X03CHANK: {
					DEVIANTS: '',
				},
				CHOICEGROUP: {
					DEVIANTS: '',
				},
			},
		};
	}

	// == X0302C_HANKOFFICE ==
	if (result['X0302C']['HANKOFFICE'] === undefined) {
		result['X0302C']['HANKOFFICE'] = {
			PHONE: {
				VO: {
					X03CCONNOR: {
						START: '',
					},
					X03CHANK: {
						START: '',
					},
				},
				PC: {
					X03CCONNOR: {
						MESSAGE: '',
						HANGUP: '',
					},
					CHOICEGROUP: {
						MESSAGE: '',
						HANGUP: '',
					},
				},
			},
		};
	}

	// == X0302C_TVSCREEN ==
	if (result['X0302C']['TVSCREEN'] === undefined) {
		result['X0302C']['TVSCREEN'] = {
			TODD: {
				PC: {
					X03CWEBB: {
						NOTKILLED: '',
						KILLED: '',
					},
				},
			},
		};
	}
}

function fixX0911K(result: any): void {
	// == X0911K_CAMP ==
	const currentValue =
		result['X0911K']['CAMP']['INTRO']['PC']['X09KKARA']['SINCERE'];

	if (isString(currentValue)) {
		result['X0911K']['CAMP']['INTRO']['PC']['X09KKARA']['SINCERE'] = {
			'1': '',
			'2': currentValue,
		};
	}
}

function fixX0101K(result: any): void {
	// == X0101K_INTRO ==
	const currentValue =
		result['X0101K']['INTRO']['LIME']['PC']['X01KSELLER01']['MODELS01'];

	if (isObject(currentValue, 9)) {
		result['X0101K']['INTRO']['LIME']['PC']['X01KSELLER01']['MODELS01'] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': currentValue['4'],
			'5': currentValue['5'] + currentValue['6'],
			'6': currentValue['7'],
			'7': currentValue['8'],
			'8': currentValue['9'],
		};
	}
}

function fixX0916K(result: any): void {
	let currentValue;

	// == X0916K_QUEUE ==
	currentValue =
		result['X0916K']['QUEUE']['KARASACRIFICE']['VO']['X09KSOLDIERBORDER06'][
			'KARADEADLUTSOLD'
		];

	if (isString(currentValue)) {
		result['X0916K']['QUEUE']['KARASACRIFICE']['VO']['X09KSOLDIERBORDER06'][
			'KARADEADLUTSOLD'
		] = {
			'1': currentValue,
			'2': '',
		};
	}

	currentValue =
		result['X0916K']['QUEUE']['LUTHERSACRIFICE']['PC'][
			'X09KCUSTOMSOFFICER'
		]['LUTHERDEADSOLDIER'];

	if (isObject(currentValue, 5)) {
		result['X0916K']['QUEUE']['LUTHERSACRIFICE']['PC'][
			'X09KCUSTOMSOFFICER'
		]['LUTHERDEADSOLDIER'] = {
			'1': '',
			'2': currentValue['1'],
			'3': currentValue['2'],
			'4': currentValue['3'],
			'5': currentValue['4'],
			'6': currentValue['5'],
		};
	}
}

function fixX0904M(result: any): void {
	let currentValue;

	// == X0904M_CARLHOUSE ==
	currentValue =
		result['X0904M']['CARLHOUSE']['LEO']['PC']['X09MLEO']['VIDEO'];

	if (isObject(currentValue, 11)) {
		result['X0904M']['CARLHOUSE']['LEO']['PC']['X09MLEO']['VIDEO'] = {
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
	}

	// == X0904M_AMANDAGARDEN ==
	if (result['X0904M']['AMANDAGARDEN'] === undefined) {
		result['X0904M']['AMANDAGARDEN'] = {
			LASTTALK: {
				PC: {
					X09MCONNOR: {
						MOVIE: '',
					},
					X09MAMANDA: {
						MOVIE: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0904M']['AMANDAGARDEN']['LASTTALK']['PC']['X09MCONNOR'][
				'MOVIE'
			];

		if (isObject(currentValue, 2)) {
			result['X0904M']['AMANDAGARDEN']['LASTTALK']['PC']['X09MCONNOR'][
				'MOVIE'
			] = currentValue['1'] + currentValue['2'];
		}

		currentValue =
			result['X0904M']['AMANDAGARDEN']['LASTTALK']['PC']['X09MAMANDA'][
				'MOVIE'
			];

		if (isObject(currentValue, 3)) {
			result['X0904M']['AMANDAGARDEN']['LASTTALK']['PC']['X09MAMANDA'][
				'MOVIE'
			] = currentValue['1'] + currentValue['2'] + currentValue['3'];
		}
	}

	// == X0904M_CHURCH ==
	if (result['X0904M']['CHURCH']['CONNORAPOLOGIES'] === undefined) {
		result['X0904M']['CHURCH']['CONNORAPOLOGIES'] = {
			PC: {
				X09MCONNOR: {
					APOLOGIES: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
				X09MKARA: {
					APOLOGIES: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0904M']['CHURCH']['CONNORAPOLOGIES']['PC']['X09MCONNOR'][
				'APOLOGIES'
			];

		if (isString(currentValue)) {
			result['X0904M']['CHURCH']['CONNORAPOLOGIES']['PC']['X09MCONNOR'][
				'APOLOGIES'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}
}

function fixX0903C(result: any): void {
	let currentValue;

	// == X0903C_ELEVATOR ==
	if (result['X0903C']['ELEVATOR'] === undefined) {
		result['X0903C']['ELEVATOR'] = {
			INTRO: {
				PC: {
					X09CCONNOR: {
						HANKKILLEDCONNOR: {
							'1': '',
							'2': '',
							'3': '',
							'4': '',
						},
						CONNORDIDNOTDIED: '',
					},
					X09CHANK: {
						HANKKILLEDCONNOR: {
							'1': '',
							'2': '',
							'3': '',
						},
						CONNORDIDNOTDIED: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0903C']['ELEVATOR']['INTRO']['PC']['X09CCONNOR'][
				'HANKKILLEDCONNOR'
			];

		if (isString(currentValue)) {
			result['X0903C']['ELEVATOR']['INTRO']['PC']['X09CCONNOR'][
				'HANKKILLEDCONNOR'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
			};
		}

		currentValue =
			result['X0903C']['ELEVATOR']['INTRO']['PC']['X09CHANK'][
				'HANKKILLEDCONNOR'
			];

		if (isString(currentValue)) {
			result['X0903C']['ELEVATOR']['INTRO']['PC']['X09CHANK'][
				'HANKKILLEDCONNOR'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}

	// == X0903C_KITCHEN_FINALE ==
	if (result['X0903C']['KITCHEN']['FINALE'] === undefined) {
		result['X0903C']['KITCHEN']['FINALE'] = {
			FA: {
				X09CCONNOR: {
					STOP1: '',
				},
				X09CCTRLROOMAND01: {
					STOP2: '',
				},
			},
		};
	}
}

function fixX0802M(result: any): void {
	let currentValue;

	// X0802M_TRUCK
	currentValue =
		result['X0802M']['TRUCK']['GAMEOVER']['PC']['X08MMARLA']['DEADENDV2'];

	if (isObject(currentValue, 9)) {
		result['X0802M']['TRUCK']['GAMEOVER']['PC']['X08MMARLA']['DEADENDV2'] =
			{
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
	}

	// X0802M_DRONES
	if (result['X0802M']['DRONES'] === undefined) {
		result['X0802M']['DRONES'] = {
			ARRIVAL: {
				VO: {
					MARKUS: {
						TEMP: { '1': '', '2': '' },
					},
					SIMON: {
						TEMP: '',
					},
					JOSH: {
						TEMP: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0802M']['DRONES']['ARRIVAL']['VO']['MARKUS']['TEMP'];

		if (isString(currentValue)) {
			result['X0802M']['DRONES']['ARRIVAL']['VO']['MARKUS']['TEMP'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// X0802M_FREEANDROIDS
	if (result['X0802M']['FREEANDROIDS'] === undefined) {
		result['X0802M']['FREEANDROIDS'] = {
			HOWENTERSHOP: {
				PC: {
					X08MSTREETMARKUS: {
						ANDNOWMARLA: '',
						ANDNOWJOSH: '',
						ANDNOWSIMON: '',
					},
					X08MSTREETMARLA: {
						ANDNOWMARLA: {
							'1': '',
							'2': '',
						},
					},
					X08MSTREETJOSH: {
						ANDNOWJOSH: {
							'1': '',
							'2': '',
						},
					},
					X08MSTREETSIMON: {
						ANDNOWSIMON: {
							'1': '',
							'2': '',
						},
					},
				},
			},
			INTRO: {
				VO: {
					X08MSTREETMARKUS: {
						INTRO: '',
						SIMON: '',
						JOSH: '',
						MARLA: '',
					},
				},
				PC: {
					CHOICEGROUP: {
						SIMON: '',
						JOSH: '',
						MARLA: '',
					},
				},
			},
			STATUE: {
				PC: {
					X08MSTREETMARKUS: {
						STATUEMARLA: '',
						STATUEJOSH: '',
						STATUESIMON: '',
					},
					X08MSTREETMARLA: {
						STATUEMARLA: '',
					},
					X08MSTREETJOSH: {
						STATUEJOSH: '',
					},
					X08MSTREETSIMON: {
						STATUESIMON: '',
					},
				},
			},
			NEEDHELP: {
				VO: {
					X08MSTREETMARKUS: {
						NEEDHELP1: '',
						NEEDHELP2: '',
						NEEDHELP3: '',
					},
				},
			},
			UTURN: {
				PC: {
					X08MSTREETMARKUS: {
						UTURNMARLA: '',
						UTURNJOSH: '',
						UTURNSIMON: '',
					},
					X08MSTREETMARLA: {
						UTURNMARLA: '',
					},
					X08MSTREETJOSH: {
						UTURNJOSH: '',
					},
					X08MSTREETSIMON: {
						UTURNSIMON: '',
					},
				},
			},
			WAKEUP: {
				PC: {
					X08MSTREETMARKUS: {
						WAKEUP: {
							'1': '',
							'2': '',
						},
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP01: {
						WAKEUP: '',
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP02: {
						WAKEUP: {
							'1': '',
							'2': '',
						},
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP03: {
						WAKEUP: {
							'1': '',
							'2': '',
						},
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP04: {
						WAKEUP: {
							'1': '',
							'2': '',
						},
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP05: {
						WAKEUP: {
							'1': '',
							'2': '',
							'3': '',
						},
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP06: {
						WAKEUP: '',
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP07: {
						WAKEUP: '',
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP08: {
						WAKEUP: {
							'1': '',
							'2': '',
							'3': '',
						},
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP09: {
						WAKEUP: '',
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MANDSHOP10: {
						WAKEUP: '',
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
					},
					X08MSTREETMARLA: {
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
						PACIFISTENDMARLA: '',
						VIOLENTENDMARLA: '',
					},
					X08MSTREETJOSH: {
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
						PACIFISTENDJOSH: '',
						VIOLENTENDJOSH: '',
					},
					X08MSTREETSIMON: {
						PACIFIST: '',
						VIOLENT: '',
						PACIFISTEND: '',
						ENDSIMON: '',
					},
					CHOICEGROUP01: {
						WAKEUP: '',
					},
					CHOICEGROUP02: {
						PEACE: '',
						VIOLENCE: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0802M']['FREEANDROIDS']['HOWENTERSHOP']['PC'][
				'X08MSTREETMARLA'
			]['ANDNOWMARLA'];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['HOWENTERSHOP']['PC'][
				'X08MSTREETMARLA'
			]['ANDNOWMARLA'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['HOWENTERSHOP']['PC'][
				'X08MSTREETJOSH'
			]['ANDNOWJOSH'];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['HOWENTERSHOP']['PC'][
				'X08MSTREETJOSH'
			]['ANDNOWJOSH'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['HOWENTERSHOP']['PC'][
				'X08MSTREETSIMON'
			]['ANDNOWSIMON'];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['HOWENTERSHOP']['PC'][
				'X08MSTREETSIMON'
			]['ANDNOWSIMON'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC'][
				'X08MSTREETMARKUS'
			]['WAKEUP'];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC'][
				'X08MSTREETMARKUS'
			]['WAKEUP'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP02'][
				'WAKEUP'
			];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP02'][
				'WAKEUP'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP03'][
				'WAKEUP'
			];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP03'][
				'WAKEUP'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP04'][
				'WAKEUP'
			];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP04'][
				'WAKEUP'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP05'][
				'WAKEUP'
			];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP05'][
				'WAKEUP'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP08'][
				'WAKEUP'
			];

		if (isString(currentValue)) {
			result['X0802M']['FREEANDROIDS']['WAKEUP']['PC']['X08MANDSHOP08'][
				'WAKEUP'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}

	// X0802M_EYEFOREYE
	if (result['X0802M']['EYEFOREYE']['COPS'] === undefined) {
		result['X0802M']['EYEFOREYE']['COPS'] = {
			PC: {
				X08MSTREETMARKUS: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MSTREETMARLA: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MSTREETJOSH: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MSTREETSIMON: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MANDSHOP01: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: {
						'1': '',
						'2': '',
					},
					SAVE: '',
					NOCHOICE: '',
				},
				X08MANDSHOP02: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MANDSHOP03: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MANDSHOP04: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MANDSHOP05: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MANDSHOP06: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MCOP01: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				X08MCOP02: {
					MUSTKILL: '',
					JOSH: '',
					MARLA: '',
					SIMON: '',
					ASSASSINS: '',
					YOUDECIDE: '',
					EXECUTE: '',
					SAVE: '',
					NOCHOICE: '',
				},
				CHOICEGROUP: {
					EXECUTE: '',
					SPARE: '',
					NOCHOICE: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0802M']['EYEFOREYE']['COPS']['PC']['X08MANDSHOP01'][
				'EXECUTE'
			];

		if (isString(currentValue)) {
			result['X0802M']['EYEFOREYE']['COPS']['PC']['X08MANDSHOP01'][
				'EXECUTE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// X0802M_EYEFOREYE_TROUBLES
	if (result['X0802M']['EYEFOREYE']['TROUBLES'] === undefined) {
		result['X0802M']['EYEFOREYE']['TROUBLES'] = {
			PC: {
				X08MSTREETMARKUS: {
					TROUBLESMARLA: '',
					TROUBLESJOSH: '',
					TROUBLESSIMON: '',
				},
				X08MSTREETMARLA: {
					TROUBLESMARLA: '',
				},
				X08MSTREETJOSH: {
					TROUBLESJOSH: '',
				},
				X08MSTREETSIMON: {
					TROUBLESSIMON: '',
				},
			},
		};
	}

	// X0802M_AFTERMATHS
	if (result['X0802M']['AFTERMATHS'] === undefined) {
		result['X0802M']['AFTERMATHS'] = {
			TV: {
				VO: {
					X08MTVCARTLAND: {
						TVPACIFIST: '',
						TVVIOLENT: {
							'1': '',
							'2': '',
						},
						COPSKILLED: '',
						COPSSAVED: '',
						END: '',
					},
					X08MTVWEBB: {
						TVPACIFIST: {
							'1': '',
							'2': '',
						},
						TVVIOLENT: '',
						COPSKILLED: '',
						COPSSAVED: '',
						END: '',
					},
					X08MTVBRINKLEY: {
						TVPACIFIST: '',
						TVVIOLENT: '',
						COPSKILLED: '',
						COPSSAVED: '',
						END: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0802M']['AFTERMATHS']['TV']['VO']['X08MTVCARTLAND'][
				'TVVIOLENT'
			];

		if (isString(currentValue)) {
			result['X0802M']['AFTERMATHS']['TV']['VO']['X08MTVCARTLAND'][
				'TVVIOLENT'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0802M']['AFTERMATHS']['TV']['VO']['X08MTVWEBB'][
				'TVPACIFIST'
			];

		if (isString(currentValue)) {
			result['X0802M']['AFTERMATHS']['TV']['VO']['X08MTVWEBB'][
				'TVPACIFIST'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0802M_CYBERSHOP_END ==
	if (result['X0802M']['CYBERSHOP']['END'] === undefined) {
		result['X0802M']['CYBERSHOP']['END'] = {
			VO: {
				X08MSIMON: {
					PEOPLEFREE: '',
					COUNTONUS: '',
				},
			},
			FA: {
				X08MMARKUS: {
					VIOLENT: '',
					PEACEFUL: '',
				},
			},
		};
	}

	// == X0802M_SYMBOL ==
	if (result['X0802M']['SYMBOL'] === undefined) {
		result['X0802M']['SYMBOL'] = {
			CHOICE: {
				PC: {
					SLOGAN: {
						SOMEBODY: '',
						RIGHTS: '',
						THINK: '',
						PEOPLE: '',
					},
					SYMBOL: {
						'01': '',
						'02': '',
						'03': '',
						'04': '',
					},
				},
			},
		};
	}

	// == X0802M_TRUCK_STEAL ==
	if (result['X0802M']['TRUCK']['STEAL'] === undefined) {
		result['X0802M']['TRUCK']['STEAL'] = {
			PC: {
				X08MMARKUS: {
					READY: '',
				},
				X08MNORTH: {
					READY: '',
				},
				DOORCYC: {
					CRASH: '',
					NOCRASH: '',
				},
			},
		};
	}
}

function fixX0304K(result: any): void {
	// == X0304K_MOTEL ==
	const currentValue =
		result['X0304K']['MOTEL']['WELCOME']['PC']['X03KKARA']['CAR'];

	if (isString(currentValue)) {
		result['X0304K']['MOTEL']['WELCOME']['PC']['X03KKARA']['CAR'] = {
			'1': '',
			'2': currentValue,
		};
	}
}

function fixX0405K(result: any): void {
	// == X0405K_CHASEV2 ==
	const currentValue =
		result['X0405K']['CHASEV2']['PART02']['FA']['X04KCOP01']['NOTICE01'];

	if (isString(currentValue)) {
		result['X0405K']['CHASEV2']['PART02']['FA']['X04KCOP01']['NOTICE01'] = {
			'1': currentValue,
			'2': '',
		};
	}

	// == X0405K_CHASE ==
	if (result['X0405K']['CHASE'] === undefined) {
		result['X0405K']['CHASE'] = {
			KARA: {
				PC: {
					X04KKARA: {
						VOICE01: '',
						VOICE02: '',
						VOICE03: '',
						VOICE04: '',
						VOICE05: '',
						VOICE06: '',
						VOICE07: '',
						VOICE08: '',
					},
				},
			},
			SPOTTED01: {
				VO: {
					X04KCASE1COP01: {
						CASE01: '',
					},
					X04KRADIOCOP01: {
						CASE01: '',
					},
				},
			},
		};
	}

	// == X0405K_HIGHWAY_START ==
	if (result['X0405K']['HIGHWAY']['START'] === undefined) {
		result['X0405K']['HIGHWAY']['START'] = {
			PC: {
				X04KKARA: {
					START: '',
					GOACROSS: '',
					SURRENDER: '',
				},
				X04KALICE: {
					START: '',
					GOACROSS: '',
					SURRENDER: '',
				},
				CHOUCEGROUP01: {
					GOACROSS: '',
					SURRENDER: '',
				},
			},
		};
	}
}

function fixX0502K(result: any): void {
	let currentValue;

	// == X0502K_BATHROOM ==
	if (
		result['X0502K']['BATHROOM']['BORING']['FA']['X05KANDROIDBATH']['END'][
			'5'
		] === undefined
	) {
		// Missing a {B} delimiter, so add additional object property
		result['X0502K']['BATHROOM']['BORING']['FA']['X05KANDROIDBATH']['END'][
			'5'
		] = '';
	}

	// == X0502K_STORAGEROOM ==
	if (result['X0502K']['STORAGEROOM']['ALICE'] === undefined) {
		result['X0502K']['STORAGEROOM']['ALICE'] = {
			PC: {
				X05KKARA: {
					FOUND: {
						'1': '',
						'2': '',
					},
				},
				X05KALICE: {
					FOUND: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0502K']['STORAGEROOM']['ALICE']['PC']['X05KKARA']['FOUND'];

		if (isString(currentValue)) {
			result['X0502K']['STORAGEROOM']['ALICE']['PC']['X05KKARA'][
				'FOUND'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0502K_CELL_COME ==
	if (result['X0502K']['CELL']['COME'] === undefined) {
		result['X0502K']['CELL']['COME'] = {
			VO: {
				X05KANDCELLSCARY: {
					COME: '',
				},
			},
		};
	}

	// == X0502K_CHASE_GAMEOVER ==
	if (result['X0502K']['CHASE']['GAMEOVER'] === undefined) {
		result['X0502K']['CHASE']['GAMEOVER'] = {
			PC: {
				X05KKARA: {
					SHOOT: '',
				},
				X05KALICE: {
					SHOOT: '',
				},
				X05KZLATKO: {
					SHOOT: '',
				},
			},
		};
	}

	// == X0502K_STORAGEROOM_FREE ==
	if (result['X0502K']['STORAGEROOM']['FREE'] === undefined) {
		result['X0502K']['STORAGEROOM']['FREE'] = {
			PC: {
				X05KKARA: {
					FREE: '',
				},
				X05KALICE: {
					FREE: '',
				},
			},
		};
	}

	// == X0502K_STOCKROOM_CATCHA ==
	if (result['X0502K']['STOCKROOM']['CATCHA'] === undefined) {
		result['X0502K']['STOCKROOM']['CATCHA'] = {
			PC: {
				X05KZLATKO: {
					CATCHA: '',
				},
			},
		};
	}
}

function fixX0202A(result: any): void {
	// == X0202A_TV ==
	const currentValue =
		result['X0202A']['TV']['NEWS02']['PC']['X02ATVCARTLAND']['ALARMING'];

	if (isObject(currentValue, 3)) {
		result['X0202A']['TV']['NEWS02']['PC']['X02ATVCARTLAND']['ALARMING'] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': currentValue['3'],
			'4': '',
		};
	}

	// == X0202A_TV_NEWS04 ==
	if (result['X0202A']['TV']['NEWS04'] === undefined) {
		result['X0202A']['TV']['NEWS04'] = {
			PC: {
				X02ATVBRINKLEY: {
					NEWS: '',
				},
			},
		};
	}

	// == X0202A_TV_NEWS05 ==
	if (result['X0202A']['TV']['NEWS05'] === undefined) {
		result['X0202A']['TV']['NEWS05'] = {
			PC: {
				X02ATVCARTLAND: {
					NEWS: '',
				},
			},
		};
	}

	// == X0202A_TV_TESTIMONY ==
	if (result['X0202A']['TV']['TESTIMONY'] === undefined) {
		result['X0202A']['TV']['TESTIMONY'] = {
			PC: {
				X02APBY01: {
					NEWS01: '',
				},
				X02APBY02: {
					NEWS02: '',
				},
				X02APBY03: {
					NEWS03: '',
				},
			},
		};
	}
}

function fixX1102C(result: any): void {
	const currentValue =
		result['X1102C']['OUTSIDE']['OUTRO']['PC']['X11CCONNOR']['NOSHOOT'];

	if (isObject(currentValue, 5)) {
		result['X1102C']['OUTSIDE']['OUTRO']['PC']['X11CCONNOR']['NOSHOOT'] = {
			'1': currentValue['1'],
			'2': currentValue['2'],
			'3': '',
			'4': currentValue['3'],
			'5': currentValue['4'],
			'6': currentValue['5'],
		};
	}
}

function fixX0201C(result: any): void {
	let currentValue;

	// == X0201C_BAR ==
	if (result['X0201C']['BAR']['CUSTOMER34'] === undefined) {
		result['X0201C']['BAR']['CUSTOMER34'] = {
			PC: {
				X02CCUSTOM03: {
					SACRIFICE: { '1': '', '2': '' },
					EMMASAVED: { '1': '', '2': '' },
					EMMADEAD: { '1': '', '2': '' },
				},
				X02CCUSTOM04: {
					SACRIFICE: '',
					EMMASAVED: { '1': '', '2': '' },
					EMMADEAD: '',
				},
			},
			VO: {
				X02CTVPRESENTER: {
					TVEMMASAVED: '',
					TVEMMADEAD: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM03'][
				'SACRIFICE'
			];

		if (isString(currentValue)) {
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM03'][
				'SACRIFICE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM03'][
				'EMMASAVED'
			];

		if (isString(currentValue)) {
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM03'][
				'EMMASAVED'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM03'][
				'EMMADEAD'
			];

		if (isString(currentValue)) {
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM03'][
				'EMMADEAD'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM04'][
				'EMMASAVED'
			];

		if (isString(currentValue)) {
			result['X0201C']['BAR']['CUSTOMER34']['PC']['X02CCUSTOM04'][
				'EMMASAVED'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0201C_CONNOR ==
	if (result['X0201C']['CONNOR']['BBLOOD'] === undefined) {
		result['X0201C']['CONNOR']['BBLOOD'] = {
			PC: {
				X02CCONNOR: {
					EXAMINE: {
						'1': '',
						'2': '',
					},
				},
				X02CHANK: {
					EXAMINE: {
						'1': '',
						'2': '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0201C']['CONNOR']['BBLOOD']['PC']['X02CCONNOR']['EXAMINE'];

		if (isString(currentValue)) {
			result['X0201C']['CONNOR']['BBLOOD']['PC']['X02CCONNOR'][
				'EXAMINE'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0201C']['CONNOR']['BBLOOD']['PC']['X02CHANK']['EXAMINE'];

		if (isString(currentValue)) {
			result['X0201C']['CONNOR']['BBLOOD']['PC']['X02CHANK']['EXAMINE'] =
				{
					'1': currentValue,
					'2': '',
				};
		}
	}

	// == X0201C_BAR_CUSTOMER7 ==
	if (result['X0201C']['BAR']['CUSTOMER7'] === undefined) {
		result['X0201C']['BAR']['CUSTOMER7'] = {
			FA: {
				X02CCUSTOM07: {
					BARREACT: '',
				},
			},
		};
	}

	// == X0201C_CONNOR_LEAVING ==
	if (result['X0201C']['CONNOR']['LEAVING'] === undefined) {
		result['X0201C']['CONNOR']['LEAVING'] = {
			PC: {
				CHOICEGROUP: {
					GO: '',
					STAY: '',
				},
			},
		};
	}

	// == X0201C_CONNOR_RA9 ==
	if (result['X0201C']['CONNOR']['RA9'] === undefined) {
		result['X0201C']['CONNOR']['RA9'] = {
			FA: {
				X02CCONNOR: {
					THINK: '',
				},
			},
		};
	}

	// == X0201C_CONNOR_RECONSTRUCT ==
	if (result['X0201C']['CONNOR']['RECONSTRUCT'] === undefined) {
		result['X0201C']['CONNOR']['RECONSTRUCT'] = {
			VO: {
				X02CCONNOR: {
					CHRONO: '',
					SUCCESS: '',
				},
				X02CHANK: {
					CHRONO: '',
					SUCCESS: '',
				},
			},
			PC: {
				CHOICEGROUP01: {
					STAB: '',
					HIT: '',
					KNIFE: '',
					QUIT: '',
				},
				CHOICEGROUP02: {
					HIT: '',
					KNIFE: '',
					FLEE: '',
					CANCEL: '',
				},
				CHOICEGROUP03: {
					FLEE: '',
					STAB: '',
					KNIFE: '',
					CANCEL: '',
				},
				CHOICEGROUP04: {
					KILL: '',
					FLEE: '',
					STAB: '',
					CANCEL: '',
				},
				CHOICEGROUP05: {
					FLEE: '',
					KILL: '',
					STAB: '',
					CANCEL: '',
				},
			},
		};
	}

	// == X0201C_HANK_CIGARETTE ==
	if (result['X0201C']['HANK']['CIGARETTE'] === undefined) {
		result['X0201C']['HANK']['CIGARETTE'] = {
			PC: {
				X02CHANK: {
					ASK: '',
				},
				X02CCHAD: {
					ASK: '',
				},
			},
		};
	}
}

function fixX0101M(result: any): void {
	let currentValue;

	// == X0101M_DEMONSTRATION ==
	if (result['X0101M']['DEMONSTRATION'] === undefined) {
		result['X0101M']['DEMONSTRATION'] = {
			ATTACK: {
				PC: {
					X01MMARKUS: {
						ATTACK1: '',
						ATTACK2: '',
						ATTACK3: '',
					},
					X01MATTACKDEMONSTR01: {
						ATTACK1: {
							'1': '',
							'2': '',
						},
						ATTACK2: '',
						ATTACK3: '',
					},
					X01MATTACKDEMONSTR02: {
						ATTACK1: '',
						ATTACK2: '',
						ATTACK3: {
							'1': '',
							'2': '',
						},
					},
					X01MATTACKDEMONSTR03: {
						ATTACK3: '',
					},
					X01MSAVIORCOP: {
						ATTACK3: {
							'1': '',
							'2': '',
							'3': '',
						},
					},
					MPARATTACK1: {
						GETUP1: '',
					},
					MPARATTACK2: {
						GETUP2: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0101M']['DEMONSTRATION']['ATTACK']['PC'][
				'X01MATTACKDEMONSTR01'
			]['ATTACK1'];

		if (isString(currentValue)) {
			result['X0101M']['DEMONSTRATION']['ATTACK']['PC'][
				'X01MATTACKDEMONSTR01'
			]['ATTACK1'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0101M']['DEMONSTRATION']['ATTACK']['PC'][
				'X01MATTACKDEMONSTR02'
			]['ATTACK3'];

		if (isString(currentValue)) {
			result['X0101M']['DEMONSTRATION']['ATTACK']['PC'][
				'X01MATTACKDEMONSTR02'
			]['ATTACK3'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0101M']['DEMONSTRATION']['ATTACK']['PC']['X01MSAVIORCOP'][
				'ATTACK3'
			];

		if (isString(currentValue)) {
			result['X0101M']['DEMONSTRATION']['ATTACK']['PC']['X01MSAVIORCOP'][
				'ATTACK3'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}
}

function fixX0503K(result: any): void {
	let currentValue;

	if (result['X0503K'] === undefined) {
		result['X0503K'] = {
			RESET: {
				HEREYOUARE: {
					PC: {
						X05KZLATKO: {
							PUTDOWN: '',
						},
					},
				},
				LUTHERORDERS: {
					PC: {
						X05KKARA: {
							ORDERS01: '',
							ORDERS02: '',
						},
						X05KLUTHER: {
							ORDERS01: '',
							ORDERS02: '',
						},
					},
				},
				ANDROIDBUST: {
					PC: {
						X05KKARA: {
							BUST01: '',
							BACKTOREALITY01: '',
							BACKTOREALITY02: '',
						},
						X05KZLATKO: {
							BUST01: '',
							BACKTOREALITY01: '',
							BACKTOREALITY02: '',
						},
					},
				},
				LUTHERNEWMISSION: {
					PC: {
						X05KZLATKO: {
							NEWMISSION01: '',
							NEWMISSION02: '',
							NEWMISSION03: '',
						},
						X05KLUTHER: {
							NEWMISSION01: '',
							NEWMISSION02: '',
							NEWMISSION03: '',
						},
					},
				},
				FOUNDALICE: {
					PC: {
						X05KKARA: {
							REUNION: {
								'1': '',
								'2': '',
								'3': '',
							},
						},
						X05KALICE: {
							REUNION: {
								'1': '',
								'2': '',
							},
						},
					},
				},
			},
			CELL: {
				MONSTERS: {
					VO: {
						X05KANDROIDCELL01: {
							COMEBACK01: '',
						},
						X05KANDROIDCELL02: {
							COMEBACK02: '',
						},
						X05KANDROIDCELL03: {
							COMEBACK03: '',
						},
						X05KANDROIDCELL04: {
							COMEBACK04: '',
						},
					},
					PC: {
						X05KANDROIDCELL01: {
							COMEBACK05: '',
							COMEBACK06: '',
						},
					},
				},
			},
			LOST: {
				BACK: {
					PC: {
						X05KKARA: {
							BACK: '',
						},
					},
				},
				GAMEOVER: {
					PC: {
						X05KKARA: {
							SORRY: {
								'1': '',
								'2': '',
							},
						},
					},
				},
				FINALE: {
					PC: {
						X05KKARA: {
							ENOUGH: {
								'1': '',
								'2': '',
								'3': '',
							},
							ACCEPT: {
								'1': '',
								'2': '',
							},
							REFUSE: {
								'1': '',
								'2': '',
							},
						},
						X05KALICE: {
							ENOUGH: '',
							ACCEPT: '',
							REFUSE: '',
						},
						X05KLUTHER: {
							ENOUGH: {
								'1': '',
								'2': '',
								'3': '',
								'4': '',
							},
							ACCEPT: '',
							REFUSE: '',
						},
						JOINCHOICE: {
							ACCEPT: '',
							REFUSE: '',
						},
					},
				},
				TV: {
					PC: {
						X05KTVSPEAKER: {
							TODDALIVE: '',
							TODDDEAD: '',
						},
					},
				},
			},
			CORRIDOR: {
				UPSET: {
					FA: {
						X05KZLATKO: {
							START: '',
							WON: '',
							BEAR: '',
							MONSTERS: '',
						},
						X05KANDROIDCELL01: {
							HURRY: '',
						},
					},
					PC: {
						X05KKARA: {
							LOST: '',
						},
						X05KZLATKO: {
							LOST: '',
							GOTOBED: '',
						},
					},
				},
			},
		};
	} else {
		// == X0503K_LOST_FINALE ==
		currentValue =
			result['X0503K']['LOST']['FINALE']['PC']['X05KLUTHER']['ENOUGH'];

		if (isString(currentValue)) {
			result['X0503K']['LOST']['FINALE']['PC']['X05KLUTHER']['ENOUGH'] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
			};
		}

		if (
			result['X0503K']['LOST']['FINALE']['PC']['X05KLUTHER']['ENOUGH'][
				'4'
			] === undefined
		) {
			result['X0503K']['LOST']['FINALE']['PC']['X05KLUTHER']['ENOUGH'][
				'4'
			] = '';
		}

		currentValue =
			result['X0503K']['LOST']['FINALE']['PC']['X05KKARA']['ENOUGH'];

		if (isString(currentValue)) {
			result['X0503K']['LOST']['FINALE']['PC']['X05KKARA']['ENOUGH'] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0503K']['LOST']['FINALE']['PC']['X05KKARA']['ACCEPT'];

		if (isString(currentValue)) {
			result['X0503K']['LOST']['FINALE']['PC']['X05KKARA']['ACCEPT'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0503K']['LOST']['FINALE']['PC']['X05KKARA']['REFUSE'];

		if (isString(currentValue)) {
			result['X0503K']['LOST']['FINALE']['PC']['X05KKARA']['REFUSE'] = {
				'1': currentValue,
				'2': '',
			};
		}

		// == X0503K_LOST_GAMEOVER ==
		currentValue =
			result['X0503K']['LOST']['GAMEOVER']['PC']['X05KKARA']['SORRY'];

		if (isString(currentValue)) {
			result['X0503K']['LOST']['GAMEOVER']['PC']['X05KKARA']['SORRY'] = {
				'1': currentValue,
				'2': '',
			};
		}

		// == X0503K_CORRIDOR ==
		currentValue =
			result['X0503K']['CORRIDOR']['UPSET']['FA']['X05KZLATKO'][
				'MONSTERS'
			];

		if (isObject(currentValue, 2)) {
			result['X0503K']['CORRIDOR']['UPSET']['FA']['X05KZLATKO'][
				'MONSTERS'
			] = currentValue['1'] + currentValue['2'];
		}

		// == X0503K_RESET ==
		currentValue =
			result['X0503K']['RESET']['FOUNDALICE']['PC']['X05KKARA'][
				'REUNION'
			];

		if (isString(currentValue)) {
			result['X0503K']['RESET']['FOUNDALICE']['PC']['X05KKARA'][
				'REUNION'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0503K']['RESET']['FOUNDALICE']['PC']['X05KALICE'][
				'REUNION'
			];

		if (isString(currentValue)) {
			result['X0503K']['RESET']['FOUNDALICE']['PC']['X05KALICE'][
				'REUNION'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}
}

function fixX0411A(result: any): void {
	let currentValue;

	// == X0411A_BUSSTATION ==
	if (result['X0411A'] === undefined) {
		result['X0411A'] = {
			BUSSTATION: {
				DILEMMA: {
					PC: {
						X04AKARA: {
							START: '',
							GIVEBACK: '',
							KEEP: '',
						},
						X04AALICE: {
							START: '',
							GIVEBACK: '',
							KEEP: '',
							RALPHBACK: '',
						},
						X04ABUSWOMAN: {
							START: '',
							GIVEBACK: '',
							KEEP: '',
						},
						X04ABUSMAN: {
							START: '',
							GIVEBACK: '',
							KEEP: '',
						},
						X04ABUSBABY: {
							START: '',
							GIVEBACK: '',
							KEEP: '',
							RALPHBACK: '',
						},
						X04ARALPH: {
							RALPHBACK: '',
						},
						CHOICEGROUP01: {
							GIVEBACK: '',
							KEEP: '',
						},
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04AKARA'][
				'GIVEBACK'
			];

		if (isObject(currentValue, 2)) {
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04AKARA'][
				'GIVEBACK'
			] = currentValue['1'] + currentValue['2'];
		}

		currentValue =
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04AKARA']['KEEP'];

		if (isObject(currentValue, 2)) {
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04AKARA'][
				'KEEP'
			] = currentValue['1'] + currentValue['2'];
		}

		currentValue =
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04ABUSWOMAN'][
				'START'
			];

		if (isObject(currentValue, 5)) {
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04ABUSWOMAN'][
				'START'
			] =
				currentValue['1'] +
				currentValue['2'] +
				currentValue['3'] +
				currentValue['4'] +
				currentValue['5'];
		}

		currentValue =
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04ABUSMAN'][
				'START'
			];

		if (isObject(currentValue, 6)) {
			result['X0411A']['BUSSTATION']['DILEMMA']['PC']['X04ABUSMAN'][
				'START'
			] =
				currentValue['1'] +
				currentValue['2'] +
				currentValue['3'] +
				currentValue['4'] +
				currentValue['5'] +
				currentValue['6'];
		}
	}
}

function fixX1108M(result: any): void {
	// == X1108M_GOODCONNOR_FINALCONNORSPEECH ==
	if (result['X1108M']['GOODCONNOR']['FINALCONNORSPEECH'] === undefined) {
		result['X1108M']['GOODCONNOR']['FINALCONNORSPEECH'] = {
			PC: {
				CONNOR: {
					CONNORSPEECH: '',
				},
				MANAND1: {
					CONNORSPEECH: '',
				},
				WOMAND1: {
					CONNORSPEECH: '',
				},
				X09MCROWD: {
					CONNORSPEECH: '',
				},
			},
		};
	} else {
		const currentValue =
			result['X1108M']['GOODCONNOR']['FINALCONNORSPEECH']['PC'][
				'MANAND1'
			]['CONNORSPEECH'];

		if (isObject(currentValue, 2)) {
			result['X1108M']['GOODCONNOR']['FINALCONNORSPEECH']['PC'][
				'MANAND1'
			]['CONNORSPEECH'] = currentValue['1'] + currentValue['2'];
		}
	}

	// == X1108M_AFTERMATHS_REACHSTONE ==
	if (result['X1108M']['AFTERMATHS']['REACHSTONE'] === undefined) {
		result['X1108M']['AFTERMATHS']['REACHSTONE'] = {
			PC: {
				X11MCONNOR: {
					FREEDOM01CONNOR: '',
					FREEDOM02: '',
				},
				X11MMARKUS: {
					FREEDOM02: '',
					FREEDOM01MARKUS: '',
				},
				X11MMARLA: {
					FREEDOM01MARKUS: '',
				},
			},
		};
	}
}

function fixX0603C(result: any): void {
	if (result['X0603C']['FINAL']['GAMEOVERFIGHT'] === undefined) {
		result['X0603C']['FINAL']['GAMEOVERFIGHT'] = {
			PC: {
				X06CCONNOR: {
					ENDING: '',
				},
				X06CANDWOMMURDERER: {
					ENDING: {
						'1': '',
						'2': '',
					},
				},
				X06CANDWOMACCOMPLICE: {
					ENDING: '',
				},
				X06CHANK: {
					ENDINGHANK: '',
				},
			},
		};
	} else {
		const currentValue =
			result['X0603C']['FINAL']['GAMEOVERFIGHT']['PC'][
				'X06CANDWOMMURDERER'
			]['ENDING'];

		if (isString(currentValue)) {
			result['X0603C']['FINAL']['GAMEOVERFIGHT']['PC'][
				'X06CANDWOMMURDERER'
			]['ENDING'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}
}

function fixX0502C(result: any): void {
	let currentValue;

	// == X0502C_DOORSTEP_BLOOD ==
	if (result['X0502C']['DOORSTEP']['BLOOD'] === undefined) {
		result['X0502C']['DOORSTEP']['BLOOD'] = {
			PC: {
				X05CCONNOR: {
					OPEN: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
				X05CHANK: {
					OPEN: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0502C']['DOORSTEP']['BLOOD']['PC']['X05CCONNOR']['OPEN'];

		if (isString(currentValue)) {
			result['X0502C']['DOORSTEP']['BLOOD']['PC']['X05CCONNOR']['OPEN'] =
				{
					'1': currentValue,
					'2': '',
					'3': '',
				};
		}

		currentValue =
			result['X0502C']['DOORSTEP']['BLOOD']['PC']['X05CHANK']['OPEN'];

		if (isString(currentValue)) {
			result['X0502C']['DOORSTEP']['BLOOD']['PC']['X05CHANK']['OPEN'] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}

	// == X0502C_DOORSTEP_KNOCK ==
	if (result['X0502C']['DOORSTEP']['KNOCK'] === undefined) {
		result['X0502C']['DOORSTEP']['KNOCK'] = {
			PC: {
				X05CHANK: {
					KNOCK: '',
				},
			},
		};
	}

	// == X0502C_URBANFIELDS ==
	if (result['X0502C']['URBANFIELDS'] === undefined) {
		result['X0502C']['URBANFIELDS'] = {
			GAMEOVER: {
				PC: {
					X05CCONNOR: {
						FAILED: {
							'1': '',
							'2': '',
							'3': '',
						},
					},
					X05CHANK: {
						FAILED: {
							'1': '',
							'2': '',
							'3': '',
							'4': '',
							'5': '',
						},
					},
				},
			},
			SUCCESS: {
				PC: {
					X05CCONNOR: {
						PLEASE: '',
						CAPTURE: '',
						LETGO: {
							'1': '',
							'2': '',
						},
						CAPTUREHANKFALLEN: {
							'1': '',
							'2': '',
						},
						CAPTUREHANKNOTFALL: '',
						CAPTUREEND: '',
						LETGOHANKFALLEN: {
							'1': '',
							'2': '',
						},
						LETGOHANKNOTFALL: '',
						LETGOEND: {
							'1': '',
							'2': '',
							'3': '',
						},
					},
					X05CHANK: {
						PLEASE: '',
						CAPTURE: '',
						LETGO: '',
						CAPTUREHANKFALLEN: {
							'1': '',
							'2': '',
							'3': '',
						},
						CAPTUREHANKNOTFALL: '',
						CAPTUREEND: {
							'1': '',
							'2': '',
							'3': '',
							'4': '',
						},
						LETGOHANKFALLEN: {
							'1': '',
							'2': '',
							'3': '',
							'4': '',
						},
						LETGOHANKNOTFALL: '',
						LETGOEND: {
							'1': '',
							'2': '',
							'3': '',
						},
					},
					X05CANDROID: {
						PLEASE: '',
						CAPTURE: '',
						LETGO: '',
						CAPTUREHANKFALLEN: '',
						CAPTUREHANKNOTFALL: '',
						CAPTUREEND: {
							'1': '',
							'2': '',
							'3': '',
						},
						LETGOHANKFALLEN: '',
						LETGOHANKNOTFALL: '',
						LETGOEND: '',
					},
					DILEMMA: {
						CAPTURE: '',
						LETGO: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0502C']['URBANFIELDS']['GAMEOVER']['PC']['X05CCONNOR'][
				'FAILED'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['GAMEOVER']['PC']['X05CCONNOR'][
				'FAILED'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['GAMEOVER']['PC']['X05CHANK'][
				'FAILED'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['GAMEOVER']['PC']['X05CHANK'][
				'FAILED'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
				'5': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'LETGO'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'LETGO'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'CAPTUREHANKFALLEN'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'CAPTUREHANKFALLEN'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'LETGOHANKFALLEN'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'LETGOHANKFALLEN'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'LETGOEND'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CCONNOR'][
				'LETGOEND'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'CAPTUREHANKFALLEN'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'CAPTUREHANKFALLEN'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'CAPTUREEND'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'CAPTUREEND'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'LETGOHANKFALLEN'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'LETGOHANKFALLEN'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'LETGOEND'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CHANK'][
				'LETGOEND'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CANDROID'][
				'CAPTUREEND'
			];

		if (isString(currentValue)) {
			result['X0502C']['URBANFIELDS']['SUCCESS']['PC']['X05CANDROID'][
				'CAPTUREEND'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}

	// == X0502C_LIVING_CONNORLED ==
	if (result['X0502C']['LIVING']['CONNORLED'] === undefined) {
		result['X0502C']['LIVING']['CONNORLED'] = {
			FA: {
				DD: {
					X05CCONNOR: {
						EXAMINE: '',
					},
				},
			},
		};
	}

	// == X0502C_LIVING_ENTER ==
	if (result['X0502C']['LIVING']['ENTER'] === undefined) {
		result['X0502C']['LIVING']['ENTER'] = {
			FA: {
				X05CHANK: {
					SECURE01: '',
					SECURE02: '',
				},
			},
		};
	}

	// == X0502C_LIVING_JACKET ==
	if (result['X0502C']['LIVING']['JACKET'] === undefined) {
		result['X0502C']['LIVING']['JACKET'] = {
			PC: {
				X05CCONNOR: {
					EXAMINE: '',
				},
				X05CHANK: {
					EXAMINE: '',
				},
			},
		};
	}

	// == X0502C_SAVEHANK_CHOICE ==
	if (result['X0502C']['SAVEHANK']['CHOICE'] === undefined) {
		result['X0502C']['SAVEHANK']['CHOICE'] = {
			PC: {
				SAVECHOICE01: {
					FOLLOW: '',
					SAVE: '',
				},
			},
		};
	}
}

function fixX1001M(result: any): void {
	let currentValue;

	// == X1001M_INTRO ==
	if (result['X1001M']['INTRO'] === undefined) {
		result['X1001M']['INTRO'] = {
			ARRIVAL: {
				PC: {
					X10MMARKUS: {
						MOVIE: '',
					},
					X10MMARLA: {
						MOVIE: {
							'1': '',
							'2': '',
							'3': '',
						},
					},
					X10MJOSH: {
						MOVIE: {
							'1': '',
							'2': '',
						},
					},
					X10MSIMON: {
						MOVIE: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X1001M']['INTRO']['ARRIVAL']['PC']['X10MMARLA']['MOVIE'];

		if (isString(currentValue)) {
			result['X1001M']['INTRO']['ARRIVAL']['PC']['X10MMARLA']['MOVIE'] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X1001M']['INTRO']['ARRIVAL']['PC']['X10MJOSH']['MOVIE'];

		if (isString(currentValue)) {
			result['X1001M']['INTRO']['ARRIVAL']['PC']['X10MJOSH']['MOVIE'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X1001M_STAGE02_REACTIONSNEUTRAL ==
	if (result['X1001M']['STAGE02']['REACTIONSNEUTRAL'] === undefined) {
		result['X1001M']['STAGE02']['REACTIONSNEUTRAL'] = {
			PC: {
				X10MREACTNEUTRALMAN01: {
					MAN01: '',
				},
				X10MREACTNEUTRALMAN02: {
					MAN02: '',
				},
				X10MREACTNEUTRALMAN03: {
					MAN03: '',
				},
				X10MREACTNEUTRALWOM03: {
					WOMAN03: '',
				},
				X10MREACTNEUTRALWOM02: {
					WOMAN02: '',
				},
				X10MREACTNEUTRALWOM01: {
					WOMAN01: '',
				},
			},
		};
	}
}

function fixX0201K(result: any): void {
	let currentValue;

	// == X0201K_FATHER_END ==
	if (result['X0201K']['FATHER']['END'] === undefined) {
		result['X0201K']['FATHER']['END'] = {
			PC: {
				X02KDAD: {
					TIMEREND: {
						'1': '',
						'2': '',
					},
					TODDLEAVES: {
						'1': '',
						'2': '',
					},
				},
				X02KALICE: {
					TIMEREND: '',
					TODDLEAVES: '',
				},
				X02KKARA: {
					TIMEREND: '',
				},
			},
			FA: {
				X02KDAD: {
					PUNCH: '',
				},
				X02KALICE: {
					PUNCH: '',
				},
				X02KKARA: {
					PUNCH: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0201K']['FATHER']['END']['PC']['X02KDAD']['TIMEREND'];

		if (isString(currentValue)) {
			result['X0201K']['FATHER']['END']['PC']['X02KDAD']['TIMEREND'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0201K']['FATHER']['END']['PC']['X02KDAD']['TODDLEAVES'];

		if (isString(currentValue)) {
			result['X0201K']['FATHER']['END']['PC']['X02KDAD']['TODDLEAVES'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0201K_FATHER_GETOUTTAHERE ==
	if (result['X0201K']['FATHER']['GETOUTTAHERE'] === undefined) {
		result['X0201K']['FATHER']['GETOUTTAHERE'] = {
			FA: {
				X02KDAD: {
					PUSH: '',
				},
			},
		};
	}

	// == X0201K_KARA ==
	if (result['X0201K']['KARA'] === undefined) {
		result['X0201K']['KARA'] = {
			COMEBACK: {
				PC: {
					X02KDAD: {
						GETOUT: {
							'1': '',
							'2': '',
						},
					},
					X02KALICE: {
						GETOUT: '',
					},
					X02KKARA: {
						GETOUT: '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0201K']['KARA']['COMEBACK']['PC']['X02KDAD']['GETOUT'];

		if (isString(currentValue)) {
			result['X0201K']['KARA']['COMEBACK']['PC']['X02KDAD']['GETOUT'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0201K_WINDOW ==
	if (result['X0201K']['WINDOW'] === undefined) {
		result['X0201K']['WINDOW'] = {
			GRAB: {
				PC: {
					X02KDAD: {
						COMEHERE: '',
					},
				},
			},
			ESCAPE: {
				PC: {
					X02KDAD: {
						QUICK: '',
					},
					X02KALICE: {
						QUICK: '',
					},
					X02KKARA: {
						QUICK: '',
					},
				},
			},
		};
	}
}

function fixX0201M(result: any): void {
	let currentValue;

	// == X0201M_END_LEAVE ==
	if (result['X0201M']['END']['LEAVE'] === undefined) {
		result['X0201M']['END']['LEAVE'] = {
			PC: {
				X02MCARL: {
					LEAVE: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
				X02MMARKUSINT: {
					LEAVE: {
						'1': '',
						'2': '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0201M']['END']['LEAVE']['PC']['X02MCARL']['LEAVE'];

		if (isString(currentValue)) {
			result['X0201M']['END']['LEAVE']['PC']['X02MCARL']['LEAVE'] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0201M']['END']['LEAVE']['PC']['X02MMARKUSINT']['LEAVE'];

		if (isString(currentValue)) {
			result['X0201M']['END']['LEAVE']['PC']['X02MMARKUSINT']['LEAVE'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0201M_END_CARLDEAD ==
	if (result['X0201M']['END']['CARLDEAD'] === undefined) {
		result['X0201M']['END']['CARLDEAD'] = {
			PC: {
				X02MMARKUSINT: {
					SHOT: '',
					MURDERER: '',
				},
				X02MLEO: {
					SHOT: '',
					MURDERER: '',
				},
				X02MPOLICEM01: {
					FREEZE: '',
				},
			},
		};
	}
}

function fixX0401C(result: any): void {
	let currentValue;

	// == X0401C_CONCLUSION2_START ==
	if (result['X0401C']['CONCLUSION2']['START'] === undefined) {
		result['X0401C']['CONCLUSION2']['START'] = {
			PC: {
				X04CHARVEY: {
					MOVIE: {
						'1': '',
						'2': '',
						'3': '',
						'4': '',
					},
				},
				X04CCURTIS: {
					MOVIE: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
				X04CANDCARLOS: {
					MOVIE: {
						'1': '',
						'2': '',
						'3': '',
					},
				},
				X04CHANK: {
					MOVIE: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0401C']['CONCLUSION2']['START']['PC']['X04CHARVEY'][
				'MOVIE'
			];

		if (isString(currentValue)) {
			result['X0401C']['CONCLUSION2']['START']['PC']['X04CHARVEY'][
				'MOVIE'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
			};
		}

		currentValue =
			result['X0401C']['CONCLUSION2']['START']['PC']['X04CCURTIS'][
				'MOVIE'
			];

		if (isString(currentValue)) {
			result['X0401C']['CONCLUSION2']['START']['PC']['X04CCURTIS'][
				'MOVIE'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0401C']['CONCLUSION2']['START']['PC']['X04CANDCARLOS'][
				'MOVIE'
			];

		if (isString(currentValue)) {
			result['X0401C']['CONCLUSION2']['START']['PC']['X04CANDCARLOS'][
				'MOVIE'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}
	}

	// == X0401C_INTERROGATION_CHAD ==
	if (result['X0401C']['INTERROGATION']['CHAD'] === undefined) {
		result['X0401C']['INTERROGATION']['CHAD'] = {
			PC: {
				X04CHARVEY: {
					CHAD: '',
					VOLUNTEER: '',
					HANK: '',
				},
				X04CCURTIS: {
					CHAD: {
						'1': '',
						'2': '',
					},
					VOLUNTEER: '',
					HANK: '',
				},
				X04CCHAD: {
					CHAD: '',
					VOLUNTEER: '',
					HANK: '',
				},
				X04CANDCARLOS: {
					CHAD: '',
					VOLUNTEER: '',
					HANK: '',
				},
				X04CHANK: {
					CHAD: {
						'1': '',
						'2': '',
						'3': '',
						'4': '',
						'5': '',
						'6': '',
					},
					VOLUNTEER: '',
					HANK: '',
				},
				X04CCONNOR: {
					CHAD: {
						'1': '',
						'2': '',
					},
					VOLUNTEER: '',
					HANK: '',
				},
				CHOICEGROUP: {
					VOLUNTEER: '',
					SAYNOTHING: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0401C']['INTERROGATION']['CHAD']['PC']['X04CCURTIS'][
				'CHAD'
			];

		if (isString(currentValue)) {
			result['X0401C']['INTERROGATION']['CHAD']['PC']['X04CCURTIS'][
				'CHAD'
			] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0401C']['INTERROGATION']['CHAD']['PC']['X04CHANK']['CHAD'];

		if (isString(currentValue)) {
			result['X0401C']['INTERROGATION']['CHAD']['PC']['X04CHANK'][
				'CHAD'
			] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
				'5': '',
				'6': '',
			};
		}

		currentValue =
			result['X0401C']['INTERROGATION']['CHAD']['PC']['X04CCONNOR'][
				'CHAD'
			];

		if (isString(currentValue)) {
			result['X0401C']['INTERROGATION']['CHAD']['PC']['X04CCONNOR'][
				'CHAD'
			] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0401C_CONCLUSION2_BADENDING ==
	if (result['X0401C']['CONCLUSION2']['BADENDING'] === undefined) {
		result['X0401C']['CONCLUSION2']['BADENDING'] = {
			PC: {
				X04CHARVEY: {
					MOVIE: '',
				},
				X04CCURTIS: {
					MOVIE: '',
				},
				X04CANDCARLOS: {
					MOVIE: '',
				},
				X04CHANK: {
					MOVIE: '',
				},
				X04CCONNOR: {
					MOVIE: '',
				},
			},
		};
	}
}

function fixX0303C(result: any): void {
	let currentValue;

	// == X0303C_LUNCH_TALK ==
	if (result['X0303C']['LUNCH']['TALK'] === undefined) {
		result['X0303C']['LUNCH']['TALK'] = {
			PC: {
				X03CCONNOR: {
					DEVIANTS: {
						'1': '',
						'2': '',
						'3': '',
						'4': '',
						'5': '',
						'6': '',
						'7': '',
						'8': '',
					},
					CHOLESTEROL: '',
					PAYLUNCH: {
						'1': '',
						'2': '',
					},
					BETS: {
						'1': '',
						'2': '',
					},
					FALL: '',
					ENDING: '',
					EMMADEAD: '',
					LIE: '',
					TRUTH: {
						'1': '',
						'2': '',
					},
					INTERROGATION: '',
					PETSHOP: '',
					OUTRO: '',
				},
				X03CHANK: {
					DEVIANTS: {
						'1': '',
						'2': '',
						'3': '',
						'4': '',
						'5': '',
						'6': '',
						'7': '',
						'8': '',
					},
					CHOLESTEROL: '',
					PAYLUNCH: {
						'1': '',
						'2': '',
					},
					BETS: {
						'1': '',
						'2': '',
					},
					FALL: '',
					ENDING: {
						'1': '',
						'2': '',
					},
					EMMADEAD: '',
					LIE: '',
					TRUTH: '',
					INTERROGATION: '',
					PETSHOP: {
						'1': '',
						'2': '',
					},
					OUTRO: '',
				},
				CHOICEGROUP01: {
					BETS: '',
					PAYLUNCH: '',
					CHOLESTEROL: '',
					DEVIANTS: '',
				},
				CHOICEGROUP02: {
					TRUTH: '',
					LIE: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['DEVIANTS'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['DEVIANTS'] =
				{
					'1': currentValue,
					'2': '',
					'3': '',
					'4': '',
					'5': '',
					'6': '',
					'7': '',
					'8': '',
				};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['PAYLUNCH'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['PAYLUNCH'] =
				{
					'1': currentValue,
					'2': '',
				};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['BETS'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['BETS'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['TRUTH'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CCONNOR']['TRUTH'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['DEVIANTS'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['DEVIANTS'] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
				'5': '',
				'6': '',
				'7': '',
				'8': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['PAYLUNCH'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['PAYLUNCH'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['BETS'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['BETS'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['ENDING'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['ENDING'] = {
				'1': currentValue,
				'2': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['PETSHOP'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['TALK']['PC']['X03CHANK']['PETSHOP'] = {
				'1': currentValue,
				'2': '',
			};
		}
	}

	// == X0303C_LUNCH_PEDRO ==
	if (result['X0303C']['LUNCH']['PEDRO'] === undefined) {
		result['X0303C']['LUNCH']['PEDRO'] = {
			PC: {
				X03CHANK: {
					MOVIE: {
						'1': '',
						'2': '',
						'3': '',
						'4': '',
						'5': '',
					},
				},
				X03CTRUCKGUY: {
					MOVIE: '',
				},
				X03CPEDRO: {
					MOVIE: {
						'1': '',
						'2': '',
						'3': '',
						'4': '',
						'5': '',
					},
				},
			},
		};
	} else {
		currentValue =
			result['X0303C']['LUNCH']['PEDRO']['PC']['X03CHANK']['MOVIE'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['PEDRO']['PC']['X03CHANK']['MOVIE'] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
				'5': '',
			};
		}

		currentValue =
			result['X0303C']['LUNCH']['PEDRO']['PC']['X03CPEDRO']['MOVIE'];

		if (isString(currentValue)) {
			result['X0303C']['LUNCH']['PEDRO']['PC']['X03CPEDRO']['MOVIE'] = {
				'1': currentValue,
				'2': '',
				'3': '',
				'4': '',
				'5': '',
			};
		}
	}
}

function fixX0701K(result: any): void {
	let currentValue;

	// == X0701K_INTRO_ARRIVAL ==
	if (result['X0701K']['INTRO']['ARRIVAL'] === undefined) {
		result['X0701K']['INTRO']['ARRIVAL'] = {
			PC: {
				X07KKARA: {
					START: {
						'1': '',
						'2': '',
						'3': '',
					},
					END: '',
				},
				X07KALICE: {
					START: '',
					END: '',
				},
				X07KLUTHER: {
					START: {
						'1': '',
						'2': '',
					},
					END: '',
				},
			},
		};
	} else {
		currentValue =
			result['X0701K']['INTRO']['ARRIVAL']['PC']['X07KKARA']['START'];

		if (isString(currentValue)) {
			result['X0701K']['INTRO']['ARRIVAL']['PC']['X07KKARA']['START'] = {
				'1': currentValue,
				'2': '',
				'3': '',
			};
		}

		currentValue =
			result['X0701K']['INTRO']['ARRIVAL']['PC']['X07KLUTHER']['START'];

		if (isString(currentValue)) {
			result['X0701K']['INTRO']['ARRIVAL']['PC']['X07KLUTHER']['START'] =
				{
					'1': currentValue,
					'2': '',
				};
		}
	}
}

function fixX0403K(result: any): void {
	if (result['X0403K'] === undefined) {
		result['X0403K'] = {
			NEIGHBOURHOOD: {
				COFFEE: {
					PC: {
						X04KKARA: {
							COFFEE: '',
						},
					},
				},
			},
		};
	}
}

function fixX0602K(result: any): void {
	if (result['X0602K'] === undefined) {
		result['X0602K'] = {
			STOCKROOM: {
				CHASING: {
					PC: {
						X06KZLATKO: {
							CHASING: '',
						},
					},
				},
				FINALRUN: {
					PC: {
						X06KKARA: {
							START: '',
							CHARGE: '',
							SHOVE: '',
							THROW: '',
							LUTHER: '',
						},
						X06KALICE: {
							START: '',
							CHARGE: '',
							SHOVE: '',
							THROW: '',
							LUTHER: '',
						},
						X06KZLATKO: {
							START: '',
							CHARGE: '',
							SHOVE: '',
							THROW: '',
							LUTHER: '',
						},
						CHOICEGROUP01: {
							CHARGE: '',
							SHOVE: '',
							THROW: '',
						},
					},
				},
			},
		};
	}
}

function fixGui(result: any): void {
	if (result['GUI']['ANALYSIS']['RECONSTRUCTBUTTON'] === undefined) {
		result['GUI']['ANALYSIS']['RECONSTRUCTBUTTON'] = '';
	}
}

function fixThoughts(result: any): void {
	if (result['THOUGHTS']['0901C']['GETINBARK'] === undefined) {
		result['THOUGHTS']['0901C']['GETINBARK'] = '';
	}

	if (result['THOUGHTS']['0901C']['RECONSTRUCTBUTTON'] === undefined) {
		result['THOUGHTS']['0901C']['RECONSTRUCTBUTTON'] = '';
	}

	if (result['THOUGHTS']['0901C']['REPORT'] === undefined) {
		result['THOUGHTS']['0901C']['REPORT'] = '';
	}
}

function fixX0101T(result: any): void {
	if (result['X0101T'] === undefined) {
		result['X0101T'] = {
			INTRO: {
				TV: {
					PC: {
						X01TACTOR: {
							KISS: '',
						},
						X01TACTRESS: {
							KISS: '',
						},
					},
				},
			},
		};
	}
}

function fixX6001X(result: any): void {
	if (result['X6001X']['ONOM']['ANXIOUS'] === undefined) {
		result['X6001X']['ONOM']['ANXIOUS'] = {
			FO: {
				CONNOR: {
					CYC01: '',
				},
			},
		};
	}

	if (result['X6001X']['ONOM']['WORRIED'] === undefined) {
		result['X6001X']['ONOM']['WORRIED'] = {
			FO: {
				CONNOR: {
					CYC01: '',
					CYC02: '',
				},
			},
		};
	}
}

function fixX6002X(result: any): void {
	if (result['X6002X']['ONOM']['ANGER'] === undefined) {
		result['X6002X']['ONOM']['ANGER'] = {
			FO: {
				KARA: {
					'01': '',
				},
			},
		};
	}

	if (result['X6002X']['ONOM']['BREATH'] === undefined) {
		result['X6002X']['ONOM']['BREATH'] = {
			FO: {
				KARA: {
					PANIC01: '',
					STEALTHSTRESS01: '',
					RUNPANIC01: '',
				},
			},
		};
	}

	if (result['X6002X']['ONOM']['CLENCHED'] === undefined) {
		result['X6002X']['ONOM']['CLENCHED'] = {
			FO: {
				KARA: {
					'01': '',
				},
			},
		};
	}

	if (result['X6002X']['ONOM']['DISGUST'] === undefined) {
		result['X6002X']['ONOM']['DISGUST'] = {
			FO: {
				KARA: {
					'01': '',
				},
			},
		};
	}

	if (result['X6002X']['ONOM']['FEAR'] === undefined) {
		result['X6002X']['ONOM']['FEAR'] = {
			FO: {
				KARA: {
					'01': '',
					'02': '',
				},
			},
		};
	}

	if (result['X6002X']['ONOM']['STRUGGLE'] === undefined) {
		result['X6002X']['ONOM']['STRUGGLE'] = {
			FO: {
				KARA: {
					LIGHT01: '',
					MID01: '',
					HEAVY01: '',
				},
			},
		};
	}
}

function fixX1105M(result: any): void {
	// == X1105M_NEGOCIATIONS_DONTWANT ==
	if (result['X1105M']['NEGOCIATIONS']['DONTWANT'] === undefined) {
		result['X1105M']['NEGOCIATIONS']['DONTWANT'] = {
			PC: {
				X11MMARKUS: {
					NORTHQUESTION: '',
				},
				X11MMARLA: {
					NORTHQUESTION: '',
				},
			},
		};
	}
}

function fixX1103M(result: any): void {
	// == X1103M_BADCONNOR_KILLED ==
	if (result['X1103M']['BADCONNOR']['KILLED'] === undefined) {
		result['X1103M']['BADCONNOR']['KILLED'] = {
			PC: {
				X11MMARKUS: {
					SHOOT: '',
				},
				X11MBADCONNOR: {
					SHOOT: '',
				},
			},
		};
	}
}

function fixX0801K(result: any): void {
	// == X0801K_COP_LUTHER ==
	if (result['X0801K']['COP']['LUTHER'] === undefined) {
		result['X0801K']['COP']['LUTHER'] = {
			PC: {
				X08KKARA: {
					START: '',
					'1STFLOOR': '',
					STOCKROOM: '',
					KITCHEN: '',
					END: '',
				},
				X08KLUTHER: {
					START: '',
					'1STFLOOR': '',
					STOCKROOM: '',
					KITCHEN: '',
					END: '',
				},
				X08KALICE: {
					START: '',
					'1STFLOOR': '',
					STOCKROOM: '',
					KITCHEN: '',
					END: '',
				},
				CHOICEGROUP: {
					'1FLOOR': '',
					STOCKROOM: '',
					KITCHEN: '',
				},
			},
		};
	}

	// == X0801K_HOUSE_GOTTAGO ==
	if (result['X0801K']['HOUSE']['GOTTAGO'] === undefined) {
		result['X0801K']['HOUSE']['GOTTAGO'] = {
			PC: {
				X08KKARA: {
					WAIT: '',
				},
				X08KROSE: {
					WAIT: '',
				},
			},
		};
	}
}

function fixX0601M(result: any): void {
	// == X0601M_DIVERSION ==
	if (result['X0601M']['DIVERSION'] === undefined) {
		result['X0601M']['DIVERSION'] = {
			CANS2: {
				PC: {
					X06MDESKGUARD01: {
						CANS2: '',
					},
					X06MDESKGUARD02: {
						CANS2: '',
					},
				},
			},
		};
	}

	// == X0601M_GUNFIGHT ==
	if (result['X0601M']['GUNFIGHT'] === undefined) {
		result['X0601M']['GUNFIGHT'] = {
			LOSECONCLUSION: {
				FA: {
					X06MMARKUS: {
						FLEE: '',
					},
					X06MDESKGUARD01: {
						FLEE: '',
					},
					X06MDESKGUARD02: {
						FLEE: '',
					},
				},
			},
		};
	}

	// == X0601M_INTRO_INTERROGATE ==
	if (result['X0601M']['INTRO']['INTERROGATE'] === undefined) {
		result['X0601M']['INTRO']['INTERROGATE'] = {
			PC: {
				X06MMARKUS: {
					INTERROGATE: '',
				},
				X06MANDROIDMANDAMAGED: {
					INTERROGATE: '',
				},
				CHOICEGROUP01: {
					INTERROGATE: '',
				},
			},
		};
	}
}

function fixX0602M(result: any): void {
	// == X0602M_EXITNOKEYNOALERT ==
	if (result['X0602M']['EXITNOKEYNOALERT'] === undefined) {
		result['X0602M']['EXITNOKEYNOALERT'] = {
			FOLLOWME: {
				FA: {
					X06MJOHN: {
						FENCE01: '',
					},
					X06MMARKUS: {
						FENCE02: '',
					},
				},
			},
		};
	}

	// == X0602M_GUNFIGHT_FIGHTSOUNDS ==
	if (result['X0602M']['GUNFIGHT']['FIGHTSOUNDS'] === undefined) {
		result['X0602M']['GUNFIGHT']['FIGHTSOUNDS'] = {
			FO: {
				X06MDESKGUARD01: {
					GUARD01HITSTOMACK: '',
					GUARD01HITFACE: '',
					GUARD01BLOW: '',
				},
				X06MDESKGUARD02: {
					GUARD01BLOWDUPLICATED: '',
					GUARD02HITFACE: '',
					GUARD02HITSTOMACK: '',
				},
			},
		};
	}
}

function fixX0603M(result: any): void {
	// == X0603M_AFTERMATCH_SPEECH ==
	if (result['X0603M']['AFTERMATCH']['SPEECH'] === undefined) {
		result['X0603M']['AFTERMATCH']['SPEECH'] = {
			PC: {
				X06MMARKUS: {
					SPEECH1: '',
					SPEECHBLOOD: '',
					SPEECH2: '',
				},
			},
		};
	}
}

function fixX0201A(result: any): void {
	// == X0201A_SQUAT_HELICOPTERS ==
	if (result['X0201A']['SQUAT']['HELICOPTERS'] === undefined) {
		result['X0201A']['SQUAT']['HELICOPTERS'] = {
			PC: {
				X02AKARA: {
					SURPRISE: '',
				},
				X02AALICE: {
					SURPRISE: '',
				},
				X02ALUTHER: {
					SURPRISE: '',
				},
			},
		};
	}
}

function fixX0303K(result: any): void {
	// == X0303K_STATION_NOMONEY ==
	if (result['X0303K']['STATION']['NOMONEY'] === undefined) {
		result['X0303K']['STATION']['NOMONEY'] = {
			PC: {
				X03KKARA: {
					NOMONEY: '',
				},
				X03KALICE: {
					NOMONEY: '',
				},
			},
		};
	}
}

function fixX0901C(result: any): void {
	// == X0901C_BOAT_EMBARK ==
	if (result['X0901C']['BOAT']['EMBARK'] === undefined) {
		result['X0901C']['BOAT']['EMBARK'] = {
			PC: {
				X09CAMANDA: {
					BOAT: '',
				},
				X09CCONNOR: {
					BOAT: '',
				},
			},
		};
	}

	// == X0901C_GARDEN ==
	if (result['X0901C']['GARDEN'] === undefined) {
		result['X0901C']['GARDEN'] = {
			HELLO: {
				PC: {
					X09CAMANDA: {
						HELLO: '',
					},
				},
			},
		};
	}
}

function fixX0501K(result: any): void {
	if (
		result['X0501K']['WORKSHOP']['ROLLERCOASTER']['PC']['X05KZLATKO'][
			'TRACKERV2PART2'
		]['6'] === undefined
	) {
		result['X0501K']['WORKSHOP']['ROLLERCOASTER']['PC']['X05KZLATKO'][
			'TRACKERV2PART2'
		]['6'] = '';
	}
}

function fixX1302C(result: any): void {
	// X1302C_FACETOFACE_MONOLOG_PC_X13CBADCONNOR_BADCONNOR_16
	if (
		result['X1302C']['FACETOFACE']['MONOLOG']['PC']['X13CBADCONNOR'][
			'BADCONNOR'
		]['16'] !== undefined
	) {
		// 16 seems to be a duplicate of 15 ? (lang: ar)
		delete result['X1302C']['FACETOFACE']['MONOLOG']['PC']['X13CBADCONNOR'][
			'BADCONNOR'
		]['16'];
	}

	// == X1302C_TVNEWS ==
	if (result['X1302C']['TVNEWS'] === undefined) {
		result['X1302C']['TVNEWS'] = {
			CONNORWLAK: {
				PC: {
					X13CBRINKLEY: {
						NEWS01: '',
						NEWS05: '',
					},
					X13CCOPTERJOURNALIST: {
						NEWS02: '',
					},
					X13CWEBB: {
						NEWS03: '',
					},
					X13CCARTLAND: {
						NEWS04: '',
					},
				},
			},
		};
	}
}

function fixX5050X(result: any): void {
	if (result['X5050X'] === undefined) {
		result['X5050X'] = {
			ONOM: {
				DGO: {
					FO: {
						MANGEN: {
							LAUGH01: '',
							LAUGH02: '',
							MUSIC: '',
						},
					},
				},
			},
		};
	}
}

function fixMenu(result: any): void {
	// == MENU_FLOWCHART_01KA ==
	if (result['MENU']['FLOWCHART']['01KA'] === undefined) {
		result['MENU']['FLOWCHART']['01KA'] = {
			START: '',
			JOIN: '',
			DISTURB: '',
			TRASH: '',
			GARDEN: '',
			WASH: '',
			TALK: '',
			TABLET: '',
			VACUUM: '',
			REWASH: '',
			REDICE: '',
			MAD: '',
			CLEAN: '',
			BOOKS: '',
		};
	}
}

function fixX2001A(result: any): void {
	// == X2001A_JUNKYARD ==
	const currentValue =
		result['X2001A']['JUNKYARD']['END']['PC']['X20AKARA']['LOVEYOU'];
	if (isString(currentValue)) {
		result['X2001A']['JUNKYARD']['END']['PC']['X20AKARA']['LOVEYOU'] = {
			'1': currentValue,
			'2': '',
		};
	}
}

/**
 * Fix some translation files formatting issues.
 * @param lang The language of the file
 * @param result The translation file object
 */
export function standardizeFile(result: any): void {
	fixX0101X(result);
	fixX0703M(result);
	fixX1202C(result);
	fixX0602C(result);
	fixX0302C(result);
	fixX0911K(result);
	fixX0101K(result);
	fixX0916K(result);
	fixX0904M(result);
	fixX0903C(result);
	fixX0802M(result);
	fixX0304K(result);
	fixX0405K(result);
	fixX0502K(result);
	fixX0202A(result);
	fixX1102C(result);
	fixX0201C(result);
	fixX0101M(result);
	fixX0503K(result);
	fixX0411A(result);
	fixX1108M(result);
	fixX0603C(result);
	fixX0502C(result);
	fixX1001M(result);
	fixX0201K(result);
	fixX0201M(result);
	fixX0401C(result);
	fixX0303C(result);
	fixX0701K(result);
	fixX0403K(result);
	fixX0602K(result);
	fixX0101T(result);
	fixX6001X(result);
	fixX6002X(result);
	fixX1105M(result);
	fixX1103M(result);
	fixX0801K(result);
	fixX0601M(result);
	fixX0602M(result);
	fixX0603M(result);
	fixX0201A(result);
	fixX0303K(result);
	fixX0901C(result);
	fixX0501K(result);
	fixX1302C(result);
	fixX5050X(result);
	fixX2001A(result);
	fixGui(result);
	fixThoughts(result);
	fixMenu(result);
}
