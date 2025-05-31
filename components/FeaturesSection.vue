<template>
	<section class="py-14 md:py-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
			<!-- Top badge + heading -->
			<div class="mb-10 sm:mb-14">
				<span class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-sm border rounded-xl px-3 py-1.5 text-xs sm:text-sm text-[#1E1E1E] border-[#FFFFFF]">
					{{ $t('hiringChallenges.badge') }}
				</span>

				<h2 class="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-4xl text-[#1E1E1E] font-semibold sm:font-medium leading-snug">
					{{ $t('hiringChallenges.title') }}
				</h2>

				<p class="mt-2 text-sm sm:text-base md:text-lg text-[#0A2A66] leading-relaxed max-w-2xl mx-auto">
					<span class="text-[#2A6FF5] font-medium">{{ $t('hiringChallenges.highlightedPart') }}</span>
					{{ $t('hiringChallenges.textPart1') }}
					<a href="#" class="text-[#1E1E1E] font-medium underline-offset-2 hover:underline">{{ $t('hiringChallenges.link1') }}</a>
					{{ $t('hiringChallenges.textPart2') }}
					<a href="#" class="text-[#2A6FF5] font-medium underline-offset-2 hover:underline">{{ $t('hiringChallenges.link2') }}</a>
					{{ $t('hiringChallenges.textPart3') }}
				</p>
			</div>

			<!-- Stats Cards -->
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
				<div v-for="(card, index) in cardsData" :key="index" class="animated-card" :ref="(el) => (cards[index] = el)" :style="{ transitionDelay: `${index * 0.3}s` }">
					<div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl flex flex-col gap-4 sm:gap-6 h-full">
						<h3 class="text-2xl sm:text-3xl font-semibold">
							{{ $t(`hiringChallenges.cards.card${index + 1}.title`) }}
						</h3>
						<p class="text-sm sm:text-[15px] leading-relaxed">
							{{ $t(`hiringChallenges.cards.card${index + 1}.text`) }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cards = ref([]);
const cardsData = ref([
	{ title: 'card1.title', text: 'card1.text' },
	{ title: 'card2.title', text: 'card2.text' },
	{ title: 'card3.title', text: 'card3.text' },
	{ title: 'card4.title', text: 'card4.text' }
]);

onMounted(() => {
	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 }
		);

		cards.value.forEach((card) => {
			if (card) observer.observe(card);
		});
	}
});
</script>

<style scoped>
.animated-card {
	opacity: 0;
	transform: translateY(60px);
	transition: opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
	visibility: hidden;
	display: flex;
}

.animated-card.visible {
	opacity: 1;
	transform: translateY(0);
	visibility: visible;
}
</style>
