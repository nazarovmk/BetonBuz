import { createI18n } from 'vue-i18n';
import type { I18nOptions } from 'vue-i18n';

const messages = {
	uz: {
		hero: {
			title: '',
			subtitle: 'O’zbekiston bo’ylab 24/7 beton teshish xizmat!',
			description: 'Hoziroq bog‘laning – uyingizda, ofisingizda, qurilish joyida tez va ishonchli beton teshish xizmat!',
			button: 'Bog’lanish'
		},
		nav: {
			home: 'Asosiy sahifa',
			advantages: 'Afzalliklar',
			interviews: 'Ish jarayoni',
			work: 'Qanday ishlaydi',
			contact: 'Bog’lanish'
		},
		partners: {
			title: 'Bu kompaniyalar bilan hamkorlikda ishlaymiz'
		},
		hiringChallenges: {
			badge: 'Nega biz?',
			title: 'Betonni burg‘ulashda vaqt, pul va asablaringizni tejang',
			highlightedPart: '10+ yillik tajriba',
			textPart1: ' va ',
			link1: 'zamonaviy uskunalar',
			textPart2: ' bilan biz har bir buyurtmani ',
			link2: 'tez, changsiz',
			textPart3: ' va aniq bajarishga kafolat beramiz.',
			cards: {
				card1: {
					title: '100% aniqlik',
					text: 'Teshiladigan joyda aniqlik bo‘lmasa, devor buziladi. Biz esa mm aniqlikda ishlaymiz'
				},
				card2: {
					title: '1 kunda bajariladi',
					text: 'Yillik tajriba va to‘liq jihozlangan jamoa – ishni cho‘zmaymiz, sifatni kafolatlaymiz'
				},
				card3: {
					title: '0% chang',
					text: 'Changsiz burg‘ulash texnologiyasi – sizning tozalik va salomatligingiz biz uchun muhim'
				},
				card4: {
					title: '1000+ muvaffaqiyatli obyekt',
					text: 'Bizni tanlaganlar orasida qurilish kompaniyalari, ishlab chiqaruvchilar va yakka mijozlar bor'
				}
			}
		},
		smartSolution: {
			title: 'Aqlli yechim',
			heading: 'Bizning jamoa qanday ishlaydi'
		},
		howItWorks: {
			title: 'Qanday qilib 1 kunda beton teshiladi?',
			subtitle: 'Mutaxassislarimiz ishni 4 ta oddiy qadamda mukammal bajaradi!',
			steps: [
				{
					title: 'Biz bilan bog‘laning',
					description: 'Telegram, telefon yoki sayt orqali murojaat qiling – buyurtmangizni darhol qabul qilamiz'
				},
				{
					title: 'Manzilga yetib boramiz',
					description: 'Mutaxassislarimiz zamonaviy uskunalar bilan 1 soat ichida joyda bo‘ladi'
				},
				{
					title: 'Aniq va changsiz teshish',
					description: 'Nemis texnologiyasi asosida chang chiqmasdan, devor yoki pollarni teshib beramiz'
				},
				{
					title: 'Tozalik va kafolatli natija',
					description: 'Ortidan axlat qoldirmaymiz. Har bir ish uchun kafolat beriladi – 100% mijoz roziligi!'
				}
			]
		},
		languages: {
			title: 'INTER-AI 4 tilda<br />suhbat o’tkaza oladi',
			subtitle: 'So‘rovingizga ko‘ra, 1 hafta ichida yangi tilni qo‘shamiz.'
		},
		footer: {
			title: 'Savollaringiz bormi? Xabar qoldiring',
			name: 'Ismingiz',
			phone: '+998 000-00-00',
			email: 'Elektron pochtangiz',
			send: 'Jo’natish',
			home: 'Asosiy sahifa',
			features: 'Afzalliklar',
			benefits: 'Qulayliklar',
			how: 'Qanday ishlaydi',
			linkedin: 'Linkedin',
			copyright: '© 2025 INTER-AI. Hamma huquqlar himoyalangan',
			success: '✅ Xabar yuborildi!',
			error: '❌ Xatolik! CHAT_ID yoki TOKEN noto‘g‘ri.',
			connectionError: '🚫 Ulanishda xatolik.'
		},
		testimonials: {
			title: 'Mijozlarimiz nima deydi?',
			cta: 'Bog‘lanish',
			list: {
				one: {
					text: 'Beton teshish bo‘yicha ushbu xizmatdan juda mamnun qoldik. Ishni o‘z vaqtida, toza va aniq bajardilar. Ayniqsa, professional yondashuvlari bizni hayratda qoldirdi.',
					name: 'Javlon B.',
					position: 'Shaxsiy uy egasi'
				},
				two: {
					text: 'Biz ofis binosida rekonstruksiya ishlarini olib borayotgan edik. Beton devorlarni teshish juda muhim bosqich edi. Xizmat tez, xavfsiz va mutlaqo shovqinsiz bajarildi.',
					name: 'Dilshod R.',
					position: 'Loyiha menejeri'
				},
				three: {
					text: 'Avvaliga beton teshish qanchalik murakkab jarayon deb o‘ylagan edik. Ammo bu jamoa ishni shunchalik professional bajardiki, biz hech qanday muammo sezmadik. Barcha tavsiyalarga amal qilishdi.',
					name: 'Olimjon K.',
					position: 'Kichik qurilish kompaniyasi egasi'
				}
			}
		}
	},
	ru: {
		hero: {
			subtitle: 'Круглосуточные услуги по бурению бетона по всему Узбекистану!',
			description: 'Свяжитесь с нами сейчас — быстрая и надежная услуга по бурению бетона у вас дома, в офисе или на строительной площадке!',
			button: 'Связаться'
		},
		nav: {
			home: 'Главная',
			advantages: 'Преимущества',
			interviews: 'Рабочий процесс',
			work: 'Как это работает',
			contact: 'Связаться'
		},
		partners: {
			title: 'Мы сотрудничаем с этими компаниями'
		},
		hiringChallenges: {
			badge: 'Почему мы?',
			title: 'Сэкономьте время, деньги и нервы при бурении бетона',
			highlightedPart: 'Более 10 лет опыта',
			textPart1: ' и ',
			link1: 'современное оборудование',
			textPart2: ' позволяют нам выполнять каждый заказ ',
			link2: 'быстро, без пыли',
			textPart3: ' и с максимальной точностью.',
			cards: {
				card1: {
					title: '100% точность',
					text: 'Без точного бурения можно повредить конструкцию. Мы работаем с миллиметровой точностью.'
				},
				card2: {
					title: 'За 1 день',
					text: 'Опытная команда и полное оснащение – никакой задержки, гарантированное качество'
				},
				card3: {
					title: '0% пыли',
					text: 'Технология бурения без пыли – заботимся о чистоте и здоровье клиентов'
				},
				card4: {
					title: '1000+ выполненных объектов',
					text: 'Нам доверяют строительные компании, производственные фирмы и частные заказчики'
				}
			}
		},
		smartSolution: {
			title: 'Умное решение',
			heading: 'Как работает наша команда'
		},
		howItWorks: {
			title: 'Как пробурить бетон за 1 день?',
			subtitle: 'Наши специалисты выполнят работу всего за 4 простых шага!',
			steps: [
				{
					title: 'Свяжитесь с нами',
					description: 'Оставьте заявку через Telegram, телефон или сайт – мы примем заказ немедленно'
				},
				{
					title: 'Приезжаем на объект',
					description: 'Наши мастера прибудут на место с современным оборудованием в течение 1 часа'
				},
				{
					title: 'Точное сверление без пыли',
					description: 'Сверлим стены и полы по немецкой технологии – без шума и грязи'
				},
				{
					title: 'Чистота и гарантия результата',
					description: 'Мы не оставляем мусор. На каждую работу даем гарантию – 100% довольных клиентов!'
				}
			]
		},
		languages: {
			title: 'INTER-AI может общаться<br />на 4 языках',
			subtitle: 'По вашему запросу мы добавим новый язык в течение недели.'
		},
		footer: {
			title: 'Есть вопросы? Оставьте сообщение',
			name: 'Ваше имя',
			phone: '+998 000-00-00',
			email: 'Ваш e-mail',
			send: 'Отправить',
			home: 'Главная',
			features: 'Преимущества',
			benefits: 'Удобства',
			how: 'Как работает',
			linkedin: 'Linkedin',
			copyright: '© 2025 INTER-AI. Все права защищены',
			success: '✅ Сообщение отправлено!',
			error: '❌ Ошибка! CHAT_ID или TOKEN неверны.',
			connectionError: '🚫 Ошибка подключения.'
		},
		testimonials: {
			title: 'Что говорят наши клиенты?',
			cta: 'Связаться',
			list: {
				one: {
					text: 'Мы остались очень довольны услугой алмазного бурения. Работа выполнена точно, аккуратно и в оговорённые сроки. Особенно понравился профессиональный подход команды.',
					name: 'Джавлон Б.',
					position: 'Частный домовладелец'
				},
				two: {
					text: 'В рамках реконструкции офиса нам потребовалось пробурить несколько бетонных стен. Всё прошло быстро, безопасно и с минимальным шумом. Отличная работа!',
					name: 'Дильшод Р.',
					position: 'Менеджер проекта'
				},
				three: {
					text: 'Сначала мы думали, что бурение бетона — сложный процесс. Но эта команда всё сделала на высшем уровне. Чётко, чисто и по всем рекомендациям. Рекомендуем.',
					name: 'Олимджон К.',
					position: 'Владелец строительной фирмы'
				}
			}
		}
	},
	en: {
		hero: {
			subtitle: '24/7 concrete drilling service throughout Uzbekistan!',
			description: 'Contact us now - fast and reliable concrete drilling service at your home, office, or construction site!',
			button: 'Contact'
		},
		nav: {
			home: 'Home',
			advantages: 'Advantages',
			interviews: 'Work process',
			work: 'How It Works',
			contact: 'Contact'
		},
		partners: {
			title: 'We work in partnership with these companies'
		},
		hiringChallenges: {
			badge: 'Why choose us?',
			title: 'Save your time, money, and nerves on concrete drilling',
			highlightedPart: '10+ years of experience',
			textPart1: ' and ',
			link1: 'modern equipment',
			textPart2: ' help us deliver every project ',
			link2: 'fast, dust-free',
			textPart3: ', and with pinpoint accuracy.',
			cards: {
				card1: {
					title: '100% precision',
					text: 'Inaccurate drilling can damage your structure. We drill with millimeter-level accuracy.'
				},
				card2: {
					title: 'Completed in 1 day',
					text: 'Experienced crew and full equipment – no delays, guaranteed quality'
				},
				card3: {
					title: '0% dust',
					text: 'We use dust-free drilling technology – keeping your place clean and safe'
				},
				card4: {
					title: '1000+ successful projects',
					text: 'Trusted by construction companies, manufacturers, and individual clients'
				}
			}
		},
		smartSolution: {
			title: 'Smart Solution',
			heading: 'How our team works'
		},
		howItWorks: {
			title: 'How to drill concrete in 1 day?',
			subtitle: 'Our experts complete the job in just 4 simple steps!',
			steps: [
				{
					title: 'Contact us',
					description: 'Reach us via Telegram, phone or website – we’ll confirm your order immediately'
				},
				{
					title: 'We arrive on site',
					description: 'Our technicians will arrive within an hour with high-end equipment'
				},
				{
					title: 'Precise & dust-free drilling',
					description: 'We drill walls and floors with German technology – no noise, no mess'
				},
				{
					title: 'Clean finish with guarantee',
					description: 'No trash left behind. We guarantee every job – 100% client satisfaction!'
				}
			]
		},
		languages: {
			title: 'INTER-AI can communicate<br />in 4 languages',
			subtitle: 'We will add a new language within a week upon your request.'
		},
		footer: {
			title: 'Have questions? Leave a message',
			name: 'Your name',
			phone: '+998 000-00-00',
			email: 'Your email',
			send: 'Send',
			home: 'Home',
			features: 'Features',
			benefits: 'Benefits',
			how: 'How it works',
			linkedin: 'Linkedin',
			copyright: '© 2025 INTER-AI. All rights reserved',
			success: '✅ Message sent!',
			error: '❌ Error! CHAT_ID or TOKEN is invalid.',
			connectionError: '🚫 Connection error.'
		},
		testimonials: {
			title: 'What our clients say',
			cta: 'Contact us',
			list: {
				one: {
					text: 'We were extremely satisfied with the concrete drilling service. The job was done neatly, precisely, and right on time. Their professional attitude truly impressed us.',
					name: 'Javlon B.',
					position: 'Homeowner'
				},
				two: {
					text: 'We needed to drill through concrete walls during our office renovation. The service was fast, safe, and surprisingly quiet. Great experience overall!',
					name: 'Dilshod R.',
					position: 'Project Manager'
				},
				three: {
					text: 'At first, we thought concrete drilling would be a complicated task. But the team handled everything professionally and smoothly. Highly recommended!',
					name: 'Olimjon K.',
					position: 'Owner, small construction company'
				}
			}
		}
	}
};

export default defineNuxtPlugin((nuxtApp) => {
	const i18n = createI18n({
		legacy: false,
		locale: 'uz',
		fallbackLocale: 'uz',
		messages
	});

	nuxtApp.vueApp.use(i18n);
});
