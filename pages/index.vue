<template>
	<div>
		<div class="bg-hero-pattern bg-cover bg-center min-h-screen relative">
			<div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none z-0"></div>
			<div class="relative z-10">
				<HeaderComponent @scroll-to="scrollToSection" class="pt-2" />
				<div ref="home"><HeroSection @scroll-to="scrollToSection" /></div>
				<HeroImg />
				<div ref="partners"><PartnersSection /></div>
			</div>
		</div>
		<div ref="advantages" class="bg-hero-pattern-2 bg-cover bg-center min-h-screen"><FeaturesSection /></div>
		<div ref="interview"><Ai /></div>
		<div ref="steps" class="bg-hero-pattern-3 bg-cover bg-center min-h-screen flex flex-col justify-center"><StepShowcase /></div>
		<div><TestimonialSection @scroll-to="scrollToSection" /></div>
		<div class="bg-hero-pattern-3 bg-cover bg-center">
			<div ref="contact"><Footer /></div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import HeaderComponent from '~/components/HeaderComponent.vue';
import HeroSection from '~/components/HeroSection.vue';
import HeroImg from '~/components/HeroImg.vue';
import Footer from '~/components/Footer.vue';
import StepShowcase from '~/components/StepShowcase.vue';
import PartnersSection from '~/components/PartnersSection.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import Ai from '~/components/AI.vue';
import TestimonialSection from '~/components/TestimonialSection.vue';

const home = ref(null);
const advantages = ref(null);
const interview = ref(null);
const steps = ref(null);
const contact = ref(null);

function scrollToSection(section) {
	const sectionRefs = {
		home,
		advantages,
		interview,
		steps,
		contact
	};

	const el = sectionRefs[section]?.value;
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
}
</script>
