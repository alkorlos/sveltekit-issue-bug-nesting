import postcssPresetEnv from 'postcss-preset-env';

const config = {
	plugins: [
		postcssPresetEnv({
			stage: 2
		})
	]
};

export default config;
