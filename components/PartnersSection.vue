<template>
	<section class="py-10 md:py-20 overflow-hidden">
		<div class="max-w-5xl mx-auto px-4 text-center">
			<h2 class="text-[18px] md:text-md font-light text-[#1E1E1E] mb-10">
				{{ $t('partners.title') }}
			</h2>

			<div class="relative w-full overflow-hidden">
				<div class="flex animate-marquee">
					<div class="flex min-w-max gap-8 sm:gap-10 md:gap-24">
						<template v-for="(logo, i) in logos" :key="'first-' + i">
							<img :src="logo" alt="Beton-teshish-kesish" class="h-8 sm:h-8 w-auto flex-shrink-0" loading="lazy" />
						</template>
					</div>

					<div class="flex min-w-max gap-8 sm:gap-10 ml-8 md:gap-24">
						<template v-for="(logo, i) in logos" :key="'second-' + i">
							<img :src="logo" alt="Beton-teshish-kesish" class="h-8 sm:h-8 w-auto flex-shrink-0" loading="lazy" />
						</template>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const logos = ['/global-logo.svg', '/auto-oyna.webp', '/uzkoramlogo.webp', '/aska-textile.webp'];
</script>

<style scoped>
@keyframes marquee {
	0% {
		transform: translateX(0%);
	}
	100% {
		transform: translateX(-50%);
	}
}

.animate-marquee {
	animation: marquee 30s linear infinite;
}
</style>
