// nuxt.config.ts
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',

	devtools: { enabled: true },

	modules: ['@nuxt/ui', '@nuxtjs/sitemap', '@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-gtag', '@nuxtjs/i18n', '@vueuse/nuxt'],

	devServer: {
		port: 3672
	},

	runtimeConfig: {
		public: {
			sitemap: {
				siteUrl: 'https://www.betonteshishkesishxizmati.uz',
				trailingSlash: true,
				defaults: {
					changefreq: 'daily',
					priority: 1,
					lastmod: new Date().toISOString()
				},
				autoLastmod: true
			}
		}
	},

	gtag: {
		tags: [
			{
				id: 'G-25RQ9SWEK',
				config: {
					page_title: 'BETON BUZ',
					send_page_view: true
				}
			},
			{
				id: 'AW-1679422383',
				config: {
					page_title: 'BETON BUZ',
					send_page_view: true
				}
			}
		]
	},

	css: ['~/assets/css/main.css'],

	vite: {
		plugins: [svgLoader()]
	},

	i18n: {
		locales: [
			{
				code: 'uz',
				name: "O'zbekcha",
				iso: 'uz-UZ',
				file: 'uz.json'
			},
			{
				code: 'en',
				name: 'English',
				iso: 'en-US',
				file: 'en.json'
			},
			{
				code: 'ru',
				name: 'Русский',
				iso: 'ru-RU',
				file: 'ru.json'
			}
		],
		defaultLocale: 'uz',
		lazy: true,
		langDir: 'locales/',
		strategy: 'no_prefix',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			fallbackLocale: 'uz'
		}
	},

	experimental: {
		renderJsonPayloads: false
	},

	app: {
		head: {
			titleTemplate: '%s | Beton teshish va kesish xizmati',
			title: 'UY BUZ',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'O‘zbekiston bo‘ylab beton teshish, kesish, buzish va demontaj xizmatlari. Zamonaviy texnika va tajribali jamoa bilan xizmat ko‘rsatamiz.'
				},
				{ name: 'keywords', content: 'beton teshish, beton kesish, uy buzish, demontaj, xizmatlar, beton buzish' },
				{ name: 'author', content: 'UY BUZ Team' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'googlebot', content: 'index, follow' },
				{ name: 'referrer', content: 'no-referrer-when-downgrade' },
				{ name: 'msapplication-TileColor', content: '#0A0A0A' },
				{ name: 'theme-color', content: '#0A0A0A' },

				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'Beton teshish va kesish xizmati | UY BUZ' },
				{ property: 'og:description', content: 'Beton teshish, kesish, buzish va demontaj xizmatlari — tez, arzon va ishonchli.' },
				{ property: 'og:image', content: 'https://www.betonteshishkesishxizmati.uz/preview.jpg' },
				{ property: 'og:url', content: 'https://www.betonteshishkesishxizmati.uz' },
				{ property: 'og:locale', content: 'uz_UZ' },
				{ property: 'og:site_name', content: 'UY BUZ' },

				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Beton teshish xizmati O‘zbekiston bo‘ylab | UY BUZ' },
				{ name: 'twitter:description', content: 'Beton teshish, kesish va buzish xizmatlari — yuqori sifat, qulay narxlar.' },
				{ name: 'twitter:image', content: 'https://www.betonteshishkesishxizmati.uz/preview.jpg' },
				{ name: 'twitter:site', content: '@uybuz' }
			],
			link: [
				{ rel: 'icon', type: 'image/webp', href: '/beton-uzLogo.webp' },
				{ rel: 'canonical', href: 'https://www.betonteshishkesishxizmati.uz/' }
			],
			script: [
				{
					children: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-1679422383');`
				},
				{
					children: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(99310921,"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true,ecommerce:"dataLayer"});`
				}
			],
			noscript: [
				{
					children: `<div><img src="https://mc.yandex.ru/watch/99310921" style="position:absolute; left:-9999px;" alt="" /></div>`
				}
			]
		},

		pageTransition: {
			name: 'route',
			mode: 'out-in'
		},

		layoutTransition: {
			name: 'route',
			mode: 'out-in'
		}
	}
});
