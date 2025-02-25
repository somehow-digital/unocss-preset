export default {
	'**/*.*': ['cspell --no-progress --no-summary --no-must-find-files'],
	'**/*.js': ['eslint'],
	'**/*.{md,json,yml,yaml}': ['prettier --check'],
};
