module.exports = {
	content: ["./index.html", "./src/**/*.{html,js}"],
	theme: {
		colors: {
			white: {
				base: "rgba(255, 255, 255, 1)",
				light: "rgba(255, 255, 255, .5)",
				lighter: "rgba(255, 255, 255, .1)",
			},
			primary: {
				light: "rgba(0, 45, 120, 1)",
				lighter: "rgba(0, 55, 145, 1)",
				base: "rgba(1, 34, 93, 1)",
				dark: "rgba(1, 28, 77, 1)",
				darkest: "rgba(0, 31, 91, .8)",
				ultra_dark: "rgba(26,60,141,1)",
				ultra_darkest: "rgba(17,45,112,1)",
			},
			success: {
				base: "rgba(21, 199, 88, 1)",
				dark: "rgba(8, 162, 29, 1)",
				light: "rgba(80, 234, 102, 1)",
			},
			black: {
				base: "rgba(33, 34, 35, 1)",
				light: "rgba(33, 34, 35, .5)",
			},
			gray: {
				base: "rgba(83, 103, 122, 1)",
				dark: "rgba(62, 62, 62, 1)",
				light: "rgba(210, 210, 210, 1)",
				lighter: "rgb(206, 215, 224)",
				lightest: "rgba(248, 249, 251, 1)",
				tabs: "#efeffc",
			},
			danger: {
				base: "rgba(255, 107, 54, 1)",
				dark: "rgba(230, 75, 20, 1)",
			},
			warning: {
				base: "rgba(255, 199, 37, 1)",
				dark: "rgba(230, 185, 40, 1)",
			},
			info: {
				base: "rgba(20, 157, 201, 1)",
				dark: "rgba(15, 141, 186, 1)",
			},
		},
		fontFamily: {
			sans: ["Nunito Sans", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
