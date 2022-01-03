module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			night: "#0F1B2B",
			moon: "#2B3543",
			white: "#ffffff",
			orange: "#FFC045",
		},
		extend: {},
	},
	variants: {
		opacity: ({ after }) => after(["disabled"]),
	},
	plugins: [],
};
