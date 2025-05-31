<template>
	<footer class="text-white py-10 md:py-16">
		<div class="max-w-7xl mx-auto px-4 space-y-10">
			<div class="bg-[#2F2F2F] p-6 md:p-10 rounded-2xl text-center space-y-6">
				<h2 class="text-2xl md:text-4xl font-medium">Savollaringiz bormi? Xabar qoldiring</h2>

				<form @submit.prevent="submitForm" class="flex flex-col md:flex-row gap-4 justify-center items-center">
					<input
						v-model="name"
						type="text"
						placeholder="Ismingiz"
						required
						class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400"
					/>
					<input
						v-model="phone"
						type="tel"
						placeholder="+998 000-00-00"
						required
						class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400"
					/>
					<input
						v-model="email"
						type="email"
						placeholder="Elektron pochtangiz"
						required
						class="w-full md:w-auto flex-1 bg-[#0F0F0F] border border-[#3A3A3A] rounded-lg py-3 px-5 text-white placeholder-gray-400"
					/>
					<button type="submit" class="bg-gradient-to-r from-[#2a93f5] to-[#1B45BE] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition">
						Jo’natish
					</button>
				</form>
			</div>

			<div class="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-400 space-y-4 md:space-y-0">
				<div class="flex items-center gap-2"></div>
				<div class="flex flex-wrap justify-center md:justify-start gap-6">
					<button @click="scrollTo('home')" class="hover:underline">{{ $t('nav.home') }}</button>
					<button @click="scrollTo('advantages')" class="hover:underline">{{ $t('nav.advantages') }}</button>
					<button @click="scrollTo('interview')" class="hover:underline">{{ $t('nav.interviews') }}</button>
					<button @click="scrollTo('steps')" class="hover:underline">{{ $t('nav.work') }}</button>
				</div>
				<div>
					<div class="flex items-center gap-2">
						<a href="https://t.me/Uy_buz" target="_blank" class="hover:text-white flex items-center gap-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block align-middle" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M22.162 2.27a1.44 1.44 0 0 0-1.566-.146L1.337 11.009a1.438 1.438 0 0 0 .164 2.658l4.81 1.54 2.264 5.457a1.444 1.444 0 0 0 2.52.25l3.184-4.797 4.582 3.473a1.44 1.44 0 0 0 2.287-.914l3.277-15.077a1.437 1.437 0 0 0-.263-1.329z"
								/>
							</svg>
							<span class="inline-block align-middle pt-[6px]">Telegram</span>
						</a>
					</div>
					<div class="flex items-center gap-2">
						<a href="tel:+998916653529" target="_blank" class="hover:text-white flex items-center gap-1">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block align-middle" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.54 4.62a1 1 0 01-.21 1.11l-1.292 1.292a11.042 11.042 0 005.516 5.516l1.292-1.292a1 1 0 011.11-.21l4.62 1.54a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.716 21 3 16.284 3 10V5z"
								/>
							</svg>
							<span class="inline-block align-middle pt-[6px]">Telefon</span>
						</a>
					</div>
				</div>
			</div>

			<div class="text-center text-xs text-gray-500 mt-6">© 2025 BETON.UZ. Hamma huquqlar himoyalangan</div>
		</div>
	</footer>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['scroll-to']);

const BOT_TOKEN = '7610269899:AAEZsvIvR4mSOH69vr-ltDXZrPYlnxOmdXI';
const name = ref('');
const phone = ref('');
const email = ref('');

const scrollTo = (section) => {
	emit('scroll-to', section);
};

const submitForm = async () => {
	const CHAT_ID = '6174247065';

	const message = `
📝 Yangi so‘rov:
👤 Ismi: ${name.value}
📞 Telefon: ${phone.value}
✉️ Email: ${email.value}
  `;

	try {
		const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
				parse_mode: 'Markdown'
			})
		});

		if (response.ok) {
			alert('✅ Xabar yuborildi!');
			name.value = '';
			phone.value = '';
			email.value = '';
		} else {
			alert('❌ Xatolik! CHAT_ID yoki TOKEN noto‘g‘ri.');
		}
	} catch (error) {
		alert('🚫 Ulanishda xatolik.');
	}
};
</script>

<style scoped>
footer {
	background-color: #1e1e1e;
	background-image: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 40px),
		repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 40px);
}
</style>
