// plugins/aos.client.ts
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
	onMounted(() => {
		AOS.init({
			duration: 1000,
			once: false, // scroll qilinsa qayta animatsiya bo‘ladi
			offset: 200 // pastga scroll qilgach boshlansin
		});

		setTimeout(() => {
			AOS.refresh();
		}, 500);
	});
});
