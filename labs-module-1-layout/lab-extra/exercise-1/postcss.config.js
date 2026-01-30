export default {
	plugins: {
		'postcss-simple-vars': {},
		'postcss-mixins': {},
		'postcss-nested': {},
		'autoprefixer': {},
		'postcss-preset-env': {
			stage: 3,
			features: {
				'nesting-rules': true
			}
		}
	}
}
