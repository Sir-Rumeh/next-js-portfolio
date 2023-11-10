/** @type {import("tailwindcss").config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#44A8B3",
				lightPrimary: "#aeecf3",
				secondary: "#6dcfda",
			},
		},
	},
	plugins: [],
};
