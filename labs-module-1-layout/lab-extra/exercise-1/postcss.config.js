export default {
	plugins: {
		'postcss-mixins': {},
		'postcss-simple-vars': {},
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
