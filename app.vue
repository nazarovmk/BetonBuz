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
</script>
