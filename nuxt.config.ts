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
				siteUrl: 'https://www.betonteshishkesishxizmati.uz/',
				routes: ['/', '/services', '/about', '/contact']
			}
		}
	},

	sitemap: {
		hostname: 'https://www.betonteshishkesishxizmati.uz',
		routes: async () => {
			return [
				{
					url: '/',
					changefreq: 'daily',
					priority: 1.0,
					lastmod: new Date().toISOString()
				},
				{
					url: '/services',
					changefreq: 'weekly',
					priority: 0.8,
					lastmod: new Date().toISOString()
				},
				{
					url: '/about',
					changefreq: 'monthly',
					priority: 0.6,
					lastmod: new Date().toISOString()
				},
				{
					url: '/contact',
					changefreq: 'monthly',
					priority: 0.6,
					lastmod: new Date().toISOString()
				}
			];
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
		plugins: [svgLoader()],
		optimizeDeps: {
			include: ['vue', 'vue-router']
		}
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
		renderJsonPayloads: true // Faster JSON responses for SEO
	},

	nitro: {
		compressPublicAssets: true, // Compress assets for faster load times
		prerender: {
			crawlLinks: true, // Ensure all links are prerendered for SEO
			routes: ['/', '/sitemap.xml']
		}
	},

	app: {
		head: {
			title: 'Beton Teshish va Kesish Xizmati | UY BUZ',
			htmlAttrs: {
				lang: 'uz'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'O‘zbekiston bo‘ylab beton teshish, kesish, buzish va demontaj xizmatlari. Zamonaviy texnika va tajribali jamoa.' },
				{ name: 'keywords', content: 'beton teshish, beton kesish, uy buzish, demontaj, xizmatlar, beton buzish, O‘zbekiston' },
				{ name: 'author', content: 'UY BUZ Team' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'googlebot', content: 'index, follow' },
				{ name: 'theme-color', content: '#0A0A0A' },

				// Open Graph
				{ property: 'og:type', content: 'website' },
				{ property: 'og:title', content: 'Beton Teshish va Kesish Xizmati | UY BUZ' },
				{ property: 'og:description', content: 'Tez, arzon va ishonchli beton teshish, kesish va demontaj xizmatlari O‘zbekiston bo‘ylab.' },
				{ property: 'og:image', content: 'https://www.betonteshishkesishxizmati.uz/preview.jpg' },
				{ property: 'og:url', content: 'https://www.betonteshishkesishxizmati.uz' },
				{ property: 'og:locale', content: 'uz_UZ' },
				{ property: 'og:site_name', content: 'UY BUZ' },

				// Twitter Card
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Beton Teshish Xizmati O‘zbekiston | UY BUZ' },
				{ name: 'twitter:description', content: 'Yuqori sifatli beton teshish, kesish va buzish xizmatlari qulay narxlarda.' },
				{ name: 'twitter:image', content: 'https://www.betonteshishkesishxizmati.uz/preview.jpg' },
				{ name: 'twitter:site', content: '@uybuz' }
			],

			link: [
				{ rel: 'icon', type: 'image/jpeg', href: '/beton-uzLogo.webp' },
				{ rel: 'canonical', href: 'https://www.betonteshishkesishxizmati.uz' }
			],

			script: [
				{
					type: 'application/ld+json',
					children: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'UY BUZ',
						url: 'https://www.betonteshishkesishxizmati.uz',
						logo: 'https://www.betonteshishkesishxizmati.uz/beton-uzLogo.webp',
						description: 'O‘zbekiston bo‘ylab beton teshish, kesish, buzish va demontaj xizmatlari.',
						contactPoint: {
							'@type': 'ContactPoint',
							telephone: '+998-90-123-45-67', // Replace with actual phone number
							contactType: 'Customer Service'
						}
					})
				},
				{
					children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-1679422383');
          `,
					defer: true
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
          `,
					defer: true
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
	},

	robots: {
		UserAgent: '*',
		Allow: '/',
		Sitemap: 'https://www.betonteshishkesishxizmati.uz/sitemap.xml'
	}
});
