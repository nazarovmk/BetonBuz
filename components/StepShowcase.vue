<template>
	<section class="text-white relative bg-[#1E1E1E] py-12 md:py-0">
		<!-- ✅ Mobile Version -->
		<div class="md:hidden block text-center px-6 space-y-10">
			<h2 class="text-3xl font-bold">{{ t('howItWorks.title') }}</h2>
			<p class="text-gray-400 text-base">{{ t('howItWorks.subtitle') }}</p>

			<div class="space-y-8">
				<div v-for="(step, index) in steps" :key="'mobile-step-' + index" class="bg-gray-800 border border-gray-700 rounded-xl p-4 text-left shadow-lg" data-aos="flip-up">
					<img :src="step.img" :alt="step.title" class="rounded-md mb-3 w-full h-auto object-cover" loading="lazy" />
					<h3 class="text-xl font-semibold mb-1 text-blue-300">{{ index + 1 }}. {{ step.title }}</h3>
					<p class="text-gray-400 text-sm">{{ step.description }}</p>
				</div>
			</div>
		</div>

		<!-- ✅ Desktop Version -->
		<div class="hidden md:flex w-full">
			<!-- Left Step Panel -->
			<div class="w-1/3 sticky top-0 h-screen flex items-center justify-center bg-[#1E1E1E]">
				<div class="px-8 py-12 relative">
					<h2 class="text-4xl font-bold mb-6 leading-tight">
						{{ t('howItWorks.title') }}
						<span class="text-gray-300 text-xl block mt-3 font-normal">{{ t('howItWorks.subtitle') }}</span>
					</h2>

					<div class="mt-12 space-y-8 relative">
						<!-- Progress line with ref -->
						<div ref="progressLine" class="absolute left-7 top-14 h-[calc(100%-6rem)] w-0.5 progress-line"></div>

						<div
							v-for="(step, index) in steps"
							:key="'desktop-step-' + index"
							@click="scrollToStep(index)"
							class="flex items-center gap-4 cursor-pointer group transition-all duration-300 z-10"
							:class="{ 'opacity-100': activeStep === index, 'opacity-60 hover:opacity-80': activeStep !== index }"
						>
							<div
								class="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300"
								:class="
									activeStep === index
										? 'bg-blue-600 border-blue-400 text-white scale-110'
										: 'bg-gray-800 border-gray-600 text-gray-300 group-hover:border-blue-300 group-hover:text-gray-100'
								"
							>
								{{ index + 1 }}
							</div>
							<p class="text-xl transition-all duration-300" :class="activeStep === index ? 'text-blue-300 font-medium' : 'text-gray-400 group-hover:text-gray-200'">
								{{ step.title }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Scroll Panel -->
			<div class="w-2/3 relative">
				<div v-for="(step, index) in steps" :key="'content-' + index" :id="'step-' + index" class="min-h-screen w-full flex items-center justify-center px-12 snap-start">
					<div
						class="w-full max-w-3xl bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transition-all duration-700"
						:class="{ 'scale-100 opacity-100': activeStep === index, 'scale-95 opacity-70': activeStep !== index }"
					>
						<img
							:src="step.img"
							:alt="step.title"
							class="w-full h-auto object-cover transition-all duration-500"
							:class="{ 'brightness-100': activeStep === index, 'brightness-75': activeStep !== index }"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import 'aos/dist/aos.css';
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import works1 from '/betonbuz.uz.png';
import works2 from '/hilti-bur.png';
import works3 from '/desctop-bur.jpg';
import works4 from '/uy-buz-hero.jpg';

const { t } = useI18n();
const activeStep = ref(0);
const progressLineHr = ref(null);
let scrollTimeout = null;

const generateSteps = () => [
	{ title: t('howItWorks.steps[0].title'), description: t('howItWorks.steps[0].description'), img: works1 },
	{ title: t('howItWorks.steps[1].title'), description: t('howItWorks.steps[1].description'), img: works2 },
	{ title: t('howItWorks.steps[2].title'), description: t('howItWorks.steps[2].description'), img: works3 },
	{ title: t('howItWorks.steps[3].title'), description: t('howItWorks.steps[3].description'), img: works4 }
];

const steps = ref(generateSteps());

watchEffect(() => {
	steps.value = generateSteps(); // til o‘zgarsa yangilanadi
});

const scrollToStep = (index) => {
	activeStep.value = index;
	const element = document.getElementById(`step-${index}`);
	if (element) {
		const offset = element.getBoundingClientRect().top + window.scrollY - 50;
		window.scrollTo({ top: offset, behavior: 'smooth' });
	}
};

const handleScroll = () => {
	const scrollPosition = window.scrollY + window.innerHeight / 2;
	const sections = document.querySelectorAll('[id^="step-"]');
	let newActiveStep = activeStep.value;

	sections.forEach((section, index) => {
		const sectionTop = section.getBoundingClientRect().top + window.scrollY;
		const sectionBottom = sectionTop + section.offsetHeight;
		if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
			newActiveStep = index;
		}
	});

	// faqat o'zgarganda yangilash
	if (newActiveStep !== activeStep.value) {
		activeStep.value = newActiveStep;
	}

	// Progress bar foizini hisoblash
	const progressPercent = ((newActiveStep + 1) / steps.value.length) * 100;

	if (progressLineHr.value) {
		progressLineHr.value.style.backgroundImage = `linear-gradient(to bottom, #2563eb ${progressPercent}%, #323232 ${progressPercent}%)`;
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll(); // sahifa yuklanganda progressni ko'rsatish uchun
});
onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
	if (scrollTimeout) clearTimeout(scrollTimeout);
});
</script>

<style scoped>
.snap-start {
	scroll-snap-align: start;
}

/* Progress line */
.progress-line {
	width: 2px;
	background-image: linear-gradient(to bottom, #2563eb 0%, #323232 0%);
	transition: background-image 0.3s ease-out;
	border-radius: 10px;
}
</style>
