/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const Color = require('color');
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()

module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			// https://tailwindcss.com/docs/customizing-colors

			// basic utility colors
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			black: '#000',
			white: '#FFF',

			// core brand colors
			rust: '#EF946C',
			lavender: '#BEA7E5',
			colablue: '#0E8FDD',
			darkspace: '#213762',
			darkocean: '#0A455A',
			darkolive: '#1F7A8C',
			darkplum: '#525776',
			midgreen: '#1FBCA0',
			midblue: '#345995',
			midgrey: '#E8EEF6',
			lightgrey: '#D9DBE8',
			lightplum: '#D3C3D9',
			lightlavender: '#ECE5EE',
			lightlemon: '#F9F7EE',

			// variations in light/dark tones
			oxfordblue: {
				DEFAULT: '#0D203F',
				xlight: lighten('#0D203F', 0.1),
				light: lighten('#0D203F', 0.05),
				dark: darken('#0D203F', 0.05),
				xdark: darken('#0D203F', 0.1),
			},

			seagreen: {
				DEFAULT: '#34E8BD',
				xlight: lighten('#34E8BD', 0.2),
				light: lighten('#34E8BD', 0.1),
				dark: darken('#34E8BD', 0.1),
				xdark: darken('#34E8BD', 0.2),
			},

			colablue: {
				DEFAULT: '#0E8FDD',
				xlight: lighten('#0E8FDD', 0.2),
				light: lighten('#0E8FDD', 0.1),
				dark: darken('#0E8FDD', 0.1),
				xdark: darken('#0E8FDD', 0.2),
			},

			lavender: {
				DEFAULT: '#BEA7E5',
				xlight: lighten('#BEA7E5', 0.2),
				light: lighten('#BEA7E5', 0.1),
				dark: darken('#BEA7E5', 0.1),
				xdark: darken('#BEA7E5', 0.2),
			},

			rust: {
				DEFAULT: '#EF946C',
				xlight: lighten('#EF946C', 0.2),
				light: lighten('#EF946C', 0.1),
				dark: darken('#EF946C', 0.1),
				xdark: darken('#EF946C', 0.2),
			},

			darkocean: {
				DEFAULT: '#0A455A',
				xlight: lighten('#0A455A', 0.1),
				light: lighten('#0A455A', 0.05),
				dark: darken('#0A455A', 0.05),
				xdark: darken('#0A455A', 0.1),
			},

			darkolive: {
				DEFAULT: '#1F7A8C',
				xlight: lighten('#1F7A8C', 0.1),
				light: lighten('#1F7A8C', 0.05),
				dark: darken('#1F7A8C', 0.05),
				xdark: darken('#1F7A8C', 0.1),
			},

			darkplum: {
				DEFAULT: '#525776',
				xlight: lighten('#525776', 0.1),
				light: lighten('#525776', 0.05),
				dark: darken('#525776', 0.05),
				xdark: darken('#525776', 0.1),
			},

			darkspace: {
				DEFAULT: '#213762',
				xlight: lighten('#213762', 0.1),
				light: lighten('#213762', 0.05),
				dark: darken('#213762', 0.05),
				xdark: darken('#213762', 0.1),
			},

			midblue: {
				DEFAULT: '#345995',
				xlight: lighten('#345995', 0.2),
				light: lighten('#345995', 0.1),
				dark: darken('#345995', 0.1),
				xdark: darken('#345995', 0.2),
			},

			midgreen: {
				DEFAULT: '#1FBCA0',
				xlight: lighten('#1FBCA0', 0.2),
				light: lighten('#1FBCA0', 0.1),
				dark: darken('#1FBCA0', 0.1),
				xdark: darken('#1FBCA0', 0.2),
			},

			lightgray: {
				DEFAULT: '#D9DBE8',
				xlight: lighten('#D9DBE8', 0.1),
				light: lighten('#D9DBE8', 0.05),
				dark: darken('#D9DBE8', 0.05),
				xdark: darken('#D9DBE8', 0.1),
			},

			lightlavender: {
				DEFAULT: '#ECE5EE',
				xlight: lighten('#ECE5EE', 0.05),
				light: lighten('#ECE5EE', 0.03),
				dark: darken('#ECE5EE', 0.03),
				xdark: darken('#ECE5EE', 0.05),
			},

			lightlemon: {
				DEFAULT: '#F9F7EE',
				xlight: lighten('#F9F7EE', 0.03),
				light: lighten('#F9F7EE', 0.01),
				dark: darken('#F9F7EE', 0.01),
				xdark: darken('#F9F7EE', 0.03),
			},

			lightplum: {
				DEFAULT: '#D3C3D9',
				xlight: lighten('#D3C3D9', 0.03),
				light: lighten('#D3C3D9', 0.01),
				dark: darken('#D3C3D9', 0.01),
				xdark: darken('#D3C3D9', 0.03),
			},

			// color themes as defined in Figma
			// https://www.figma.com/file/1ZoPrunzykFacq3ZJE5dIk/Fermyon-Playground?type=design&node-id=8495-5431&mode=design&t=2vWn6IOWtltE2V2c-0
			background: {
				light: '#F6F4F8',
				dark: '#0D203F',
				2: '#061632',
			},

			blue: {
				contrast: {
					1: '#AEC7FF',
					2: '#2D416E',
					3: '#465B8B',
					4: '#25375F',
				},
			},

			contrast: {
				DEFAULT: '#DBE3EF',
				2: '#96A9C8',
			},

			disabled: {
				// NOTE: the design system calls this color "disabled colour"
				//
				// This will allow us to refer to it as either `bg-disabled` or `bg-disabled-colour`
				DEFAULT: '#7788A7',
				colour: '#7788A7',
				lightmode: '#626F93',
			},

			hover: {
				blue: '#1A3058',
			},

			light: {
				blue: {
					1: '#2E497A',
					highlight: '#E6EBFB',
				},
				contrast: {
					1: '#D1D0DO',
					2: '#E2E2E2',
					3: '#546689',
				},
				background: {
					2: '#FCFAFF',
				}
			},

			navbar: {
				blue: '#152A4D',
			},

			overlay: {
				// 70% opacity
				light: '#C2CADFB3',
				// 80% opacity
				dark: '#030D1ECC',
			},

			primary: {
				DEFAULT: '#2AD89B',
				contrast: '#063429',
				highlight: '#0CFFAA',
				disabled: {
					DEFAULT: '#1D9083',
					light: '#68736D',
					dark: '#14645C',
				}
			},

			purple: {
				light: '#EEE1F9',
				bold: '#D8B5FB'
			},

			red: {
				dark: '#FF4848',
			},
		},

		// typography
		fontFamily: {
			sans: ['Sen', 'Europa', 'Avenir', ...defaultTheme.fontFamily.sans],
			mono: ['SourceCodePro', ...defaultTheme.fontFamily.mono],
		},

		plugins: [],
	},
};
