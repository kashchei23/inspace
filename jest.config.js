// jest.config.js
// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	verbose: true,
	moduleNameMapper: {
		'\\.scss$': 'identity-obj-proxy',
		'^lodash-es$': 'lodash',
	},
};

module.exports = config;
