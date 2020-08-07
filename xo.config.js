module.exports = {
	envs: [
		'node',
		'browser'
	],
	extends: [
		'xo-react'
	],
	plugins: [
		'react',
		'better-styled-components'
	],
	rules: {
		camelcase: 0,
		'better-styled-components/sort-declarations-grouped': 2,
		'unicorn/no-abusive-eslint-disable': 0,
		'eslint-comments/no-unused-disable': 0,
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 0,
		'import/no-anonymous-default-export': 0,
		'import/extensions': [
			'error',
			'never',
			{
				svg: 'always',
				css: 'always'
			}
		],
		'import/no-unassigned-import': [
			2,
			{
				allow: [
					'**/style/*.css',
					'**/*.css',
					'typeface-**',
					'moment/locale/**'
				]
			}
		]
	}
};
