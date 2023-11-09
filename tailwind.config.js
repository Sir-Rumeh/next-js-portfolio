/** @type {import("tailwindcss").config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#44A8B3",
				lightPrimary: "#aeecf3",
			},
		},
	},
	plugins: [],
};
