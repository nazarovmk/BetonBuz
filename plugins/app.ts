export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('app:created', () => {
		const theme = useColorMode();
		theme.preference = 'dark';
	});
});
