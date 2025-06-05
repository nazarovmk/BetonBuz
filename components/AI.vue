<template>
	<section ref="solutionsSection" class="relative bg-white pb-16 md:pb-24 overflow-hidden min-h-screen">
		<div class="max-w-6xl mx-auto px-4 text-center">
			<div
				class="inline-flex items-center gap-2 bg-[#F9F9F9] shadow-md rounded-[12px] px-4 py-2 text-md text-[#1E1E1E] mb-6 border-[3px] border-white cursor-pointer"
				style="box-shadow: 0px 4px 10.3px 0px #5c5c5c1a"
			>
				<img :src="starImg" alt="Beton-teshish-kesish" loading="lazy" />
				{{ $t('smartSolution.title') }}
			</div>
			<h2 class="text-2xl md:text-4xl font-medium my-2 text-[#1E1E1E]">
				{{ $t('smartSolution.heading') }}
			</h2>
		</div>

		<div class="relative max-w-6xl mx-auto mt-[32px] px-4">
			<div class="solutions-grid space-y-8 md:space-y-0">
				<div v-for="(item, index) in solutions" :key="index">
					<img :src="item.img" alt="Beton-teshish-kesish" class="solution-img" loading="lazy" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Rasmlar
import starImg from '/star.svg';
import ai1 from '/Artboard4.jpg';
import ai2 from '/arra.jpg';
import ai3 from '/bur.jpg';
import ai4 from '/hiltibur.jpg';

interface Solution {
	img: string;
}

const solutions = ref<Solution[]>([]);

function updateSolutions() {
	const isMobile = window.innerWidth < 768;

	solutions.value = [{ img: ai1 }, { img: ai2 }, { img: ai3 }, { img: ai4 }];
}

onMounted(() => {
	updateSolutions();
	window.addEventListener('resize', updateSolutions);
});

onBeforeUnmount(() => {
	window.removeEventListener('resize', updateSolutions);
});
</script>

<style scoped>
/* Mobil uchun default uslub */
.solution-img {
	width: 100%;
	height: auto;
	object-fit: contain;
	border-radius: 1rem;
	box-shadow: 0 15px 40px rgba(80, 120, 255, 0.4), 0 0 70px rgba(23, 91, 217, 0.3);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 768px) {
	.solutions-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.solution-img {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}
}

/* Mobilda oraliq saqlab turish */
.space-y-8 > * + * {
	margin-top: 2rem;
}
</style>
