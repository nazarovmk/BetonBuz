<template>
	<section class="py-16 md:py-24">
		<div class="max-w-5xl mx-auto px-4 text-center">
			<h1 class="text-3xl md:text-5xl font-medium text-white leading-snug md:leading-tight">
				{{ $t('hero.subtitle') }}
			</h1>
			<p class="mt-6 max-w-3xl mx-auto text-white text-base md:text-lg font-light">
				{{ $t('hero.description') }}
			</p>
			<div class="mt-8 mx-auto flex justify-center gap-4">
				<NuxtLink
					@click="$emit('scroll-to', 'contact')"
					class="flex justify-center items-center max-w-lg bg-gradient-to-r from-[#2A6FF5] to-[#1B45BE] text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition shadow-inner"
					style="box-shadow: inset 0px 0px 11.8px 0px #95adff"
				>
					<button>{{ $t('hero.button') }}</button>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>
