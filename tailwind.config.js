/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			maxWidth: {
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
			},
			colors: {
				"up-blue-light": "#0c71b0",
				"up-blue-dark": "#88ccf6",
				"down-red-light": "#8f1600",
				"down-red-dark": "#ff7d66",
				"card-light": "#eeeeee",
				"card-dark": "#25282A",
			},
		},
	},
	plugins: [],
	darkMode: "selector",
	important: true,
};
