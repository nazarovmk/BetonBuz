<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>

		<UNotifications />
	</div>
</template>

<script setup>
const { locale } = useI18n();
useHead({
	htmlAttrs: {
		lang: locale
	}
});

useHead({
	script: [
		{
			type: 'application/ld+json',
			children: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'LocalBusiness',
				name: 'UY BUZ - Beton Teshish va Kesish Xizmati',
				image: 'https://www.betonteshishkesishxizmati.uz/preview.jpg',
				'@id': 'https://www.betonteshishkesishxizmati.uz',
				url: 'https://www.betonteshishkesishxizmati.uz',
				telephone: '+998916653529',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Fargona Viloyati, Margilon shahari',
					addressLocality: 'Fargona',
					addressCountry: 'UZ'
				},
				openingHoursSpecification: {
					'@type': 'OpeningHoursSpecification',
					dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					opens: '08:00',
					closes: '20:00'
				},
				priceRange: '$$',
				description: 'Uzbekiston beton teshish, kesish, uy buzish va demontaj xizmatlari. UY BUZ bilan ishonchli va tezkor xizmatlardan foydalaning.'
			})
		}
	]
});
</script>
