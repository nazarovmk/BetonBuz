<template>
	<section class="py-20 sm:pt-14 md:pt-20">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
			<!-- Top badge + heading -->
			<div class="mb-10 sm:mb-14">
				<div class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-sm border rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-[#1E1E1E] border-[#FFFFFF]">
					<img :src="jobIcon" alt="" class="h-4 sm:h-5 md:h-6 w-auto" />
					<span>{{ $t('hiringChallenges.badge') }}</span>
				</div>

				<h2 class="text-xl sm:text-2xl md:text-4xl text-[#1E1E1E] font-semibold sm:font-medium mt-4 sm:mt-6 leading-snug md:leading-snug">
					{{ $t('hiringChallenges.title') }}
				</h2>

				<p class="text-[#0A2A66] mt-2 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
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
				<!-- Card 1 -->
				<div class="animated-card" :ref="(el) => (cards[0] = el)" :style="{ transitionDelay: '0s' }">
					<div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6 w-full">
						<img :src="jobSearchIcon" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
						<h3 class="text-2xl sm:text-3xl font-semibold">{{ $t('hiringChallenges.cards.card1.title') }}</h3>
						<p class="text-sm sm:text-[15px] font-normal leading-relaxed">{{ $t('hiringChallenges.cards.card1.text') }}</p>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="animated-card" :ref="(el) => (cards[1] = el)" :style="{ transitionDelay: '0.3s' }">
					<div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6 w-full">
						<img :src="resumeIcon" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
						<h3 class="text-2xl sm:text-3xl font-semibold">{{ $t('hiringChallenges.cards.card2.title') }}</h3>
						<p class="text-sm sm:text-[15px] font-normal leading-relaxed">{{ $t('hiringChallenges.cards.card2.text') }}</p>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="animated-card" :ref="(el) => (cards[2] = el)" :style="{ transitionDelay: '0.6s' }">
					<div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6 w-full">
						<img :src="employeeIcon" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
						<h3 class="text-2xl sm:text-3xl font-semibold">{{ $t('hiringChallenges.cards.card3.title') }}</h3>
						<p class="text-sm sm:text-[15px] font-normal leading-relaxed">{{ $t('hiringChallenges.cards.card3.text') }}</p>
					</div>
				</div>

				<!-- Card 4 -->
				<div class="animated-card" :ref="(el) => (cards[3] = el)" :style="{ transitionDelay: '0.9s' }">
					<div class="bg-[#3660E6] text-white p-5 sm:p-6 rounded-2xl text-left flex flex-col gap-4 sm:gap-6 w-full">
						<img :src="taskListIcon" alt="Icon" class="h-10 sm:h-12 w-10 sm:w-12" />
						<h3 class="text-2xl sm:text-3xl font-semibold">{{ $t('hiringChallenges.cards.card4.title') }}</h3>
						<p class="text-sm sm:text-[15px] font-normal leading-relaxed">{{ $t('hiringChallenges.cards.card4.text') }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

// Rasmlarni import qilish
import jobIcon from '/Job.svg';
import jobSearchIcon from '/JobSearch.svg';
import resumeIcon from '/Resume.svg';
import employeeIcon from '/employee.svg';
import taskListIcon from '/TaskList.svg';

const cards = ref([]);

onMounted(async () => {
	await nextTick();

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
	transition: all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
	visibility: hidden;
	will-change: opacity, transform;
	height: 100%; /* 💡 kartani to‘liq bo‘yda egallash */
	display: flex;
}

.animated-card.visible {
	opacity: 1;
	transform: translateY(0);
	visibility: visible;
}
</style>
