/** @type {import('tailwindcss').Config} */

export default {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/assets/images/Image.png')",
				'hero-pattern-2': "url('/assets/images/bg 2.png')",
				'hero-pattern-3': "url('/assets/images/bg 3.png')"
			},
			keyframes: {
				orbit80: {
					'0%': { transform: 'rotate(0deg) translateX(80px) rotate(-0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' }
				},
				orbit120: {
					'0%': { transform: 'rotate(0deg) translateX(120px) rotate(-0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
				},
				orbit160: {
					'0%': { transform: 'rotate(0deg) translateX(160px) rotate(-0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(160px) rotate(-360deg)' }
				},
				orbit200: {
					'0%': { transform: 'rotate(0deg) translateX(200px) rotate(-0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' }
				}
			},
			animation: {
				orbit80: 'orbit80 12s linear infinite',
				orbit120: 'orbit120 16s linear infinite',
				orbit160: 'orbit160 20s linear infinite',
				orbit200: 'orbit200 24s linear infinite'
			},
			colors: {
				main: {
					DEFAULT: '#1C1C1C',
					50: '#f6f6f6',
					100: '#e7e7e7',
					200: '#d1d1d1',
					300: '#b0b0b0',
					400: '#888888',
					500: '#6d6d6d',
					600: '#5d5d5d',
					700: '#4f4f4f',
					800: '#454545',
					900: '#3d3d3d',
					950: '#1c1c1c'
				},
				black: {
					DEFAULT: '#000',
					1: '#252527'
				},
				grey: {
					DEFAULT: '#9D9D9D'
				},
				red: {
					DEFAULT: '#9E1823'
				},
				blue: {
					DEFAULT: '#085DAD'
				},
				purple: {
					DEFAULT: '#465A95',
					0: '#7594EF'
				}
			},
			fontFamily: {
				inherit: 'inherit',
				greycliff: ['Greycliff CF', 'sans-serif'],
				sfPro: ['SF Pro Display', 'sans-serif']
			}
		}
	},
	plugins: []
};
