module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				night: "#0F1B2B",
				moon: "#2B3543",
				white: "#ffffff",
				orange: "#FFC045",
				red: "#E51937",
			},
		},
	},
	variants: {
		opacity: ({ after }) => after(["disabled"]),
	},
	plugins: [],
};
