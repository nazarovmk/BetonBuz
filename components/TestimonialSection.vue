<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialKeys = ['one', 'two', 'three'];

import quoteImg from '/Vector.svg';

onMounted(() => {
	AOS.init({
		duration: 1000,
		once: false
	});
});
</script>

<template>
	<section class="bg-white py-16 md:py-24 text-center">
		<h2 class="text-2xl md:text-5xl font-medium text-[#1E1E1E] mb-10">
			{{ t('testimonials.title') }}
		</h2>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
			<div v-for="key in testimonialKeys" :key="key" class="bg-[#F9F9F9] rounded-xl p-6 text-left shadow-md flex flex-col justify-between" data-aos="flip-left">
				<div>
					<div class="text-gray-300 mb-4">
						<img :src="quoteImg" alt="Beton-teshish-kesish" loading="lazy" />
					</div>
					<p class="text-[#1E1E1E] text-base mb-4">{{ t(`testimonials.list.${key}.text`) }}</p>
				</div>
				<div>
					<p class="font-medium text-[#1E1E1E]">{{ t(`testimonials.list.${key}.name`) }}</p>
					<p class="text-sm text-[#787878]">{{ t(`testimonials.list.${key}.position`) }}</p>
				</div>
			</div>
		</div>

		<div class="mt-10">
			<button
				@click="$emit('scroll-to', 'contact')"
				class="text-white font-medium py-3 px-8 rounded-[12px] shadow-md hover:opacity-90 transition border-[3px] border-white"
				style="background: radial-gradient(42.49% 93.52% at 49.79% 50%, #5078ff 0%, #175bd9 100%); box-shadow: inset 0 0 11.8px 0 #95adff"
			>
				{{ t('testimonials.cta') }}
			</button>
		</div>
	</section>
</template>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
	width: 32px;
	height: 32px;
	font-size: 14px;
	background-color: #e5e7eb;
	border-radius: 9999px;
	color: #1e1e1e;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
	transform: scale(1.1);
	background-color: #d1d5db;
}
.swiper-button-next::after,
.swiper-button-prev::after {
	font-size: 14px;
}
</style>
