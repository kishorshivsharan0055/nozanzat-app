module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	extends: [
		"@react-native-community",
		"prettier",
		"prettier/@typescript-eslint",
	],
	rules: {
		"react-native/no-inline-styles": 0,
	},
};