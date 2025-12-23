export default {
	plugins: {
		'postcss-simple-vars': {},
		'postcss-nested': {},
		'postcss-mixins': {},
		'autoprefixer': {},
		'postcss-preset-env': {
			stage: 3,
			features: {
				'nesting-rules': true
			}
		}
	}
}
