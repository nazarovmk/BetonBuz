// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	// Modules
	modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-gtag', '@nuxtjs/i18n', '@vueuse/nuxt'],

	devServer: {
		port: 3672
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
			title: 'BETON BUZ',
			meta: [
				{ name: 'description', content: 'UY BUZ — beton teshish, buzish va demontaj xizmatlari' },
				{ name: 'keywords', content: 'uy buzish, beton teshish, demontaj, xizmat, texnika' },
				{ name: 'author', content: 'UY BUZ Team' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'googlebot', content: 'index, follow' },
				{ name: 'msapplication-TileColor', content: '#0A0A0A' },
				{ name: 'theme-color', content: '#0A0A0A' },
				{ name: 'referrer', content: 'no-referrer-when-downgrade' },

				// Open Graph
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'UY BUZ — beton teshish va buzish xizmatlari' },
				{ property: 'og:description', content: 'Beton teshish va buzish xizmatlarini professional jamoamiz bilan oson va tez amalga oshiring.' },
				{ property: 'og:image', content: 'https://www.uybuz.uz/preview.png' },
				{ property: 'og:url', content: 'https://www.uybuz.uz' },
				{ property: 'og:locale', content: 'uz_UZ' },

				// Twitter Card
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'UY BUZ — beton teshish xizmati' },
				{ name: 'twitter:description', content: 'Beton teshish, buzish va demontaj xizmatlari — yuqori sifat, past narx.' },
				{ name: 'twitter:image', content: 'https://www.uybuz.uz/preview.png' }
			],

			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/beton.uzLogo.jpg'
				}
			],

			script: [
				{
					children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1679422383');
          `
				},
				{
					children: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){
                (m[i].a=m[i].a||[]).push(arguments)
              };
              m[i].l=1*new Date();
              for(var j=0;j<document.scripts.length;j++){
                if(document.scripts[j].src===r){return;}
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");
            ym(99310921,"init",{
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `
				}
			],

			noscript: [
				{
					children: `<div><img src="https://mc.yandex.ru/watch/99310921" style="position:absolute; left:-9999px;" alt="" /></div>`
				}
			]
		},

		// Sahifa transition
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
