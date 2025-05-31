export default defineAppConfig({
	ui: {
		primary: 'main',
		button: {
			base: 'duration-200 ease-in-out !shadow-none',
			rounded: 'rounded-xl',
			variant: { solid: 'bg-primary-950 hover:bg-primary-800' }
		},
		// modal: {
		// 	overlay: {
		// 		background: 'bg-black/[.5] backdrop-blur-sm'
		// 	},
		// 	shadow: '',
		// 	rounded: 'rounded-2xl'
		// },
		divider: {
			border: {
				base: 'dark:border-white/[.1]'
			}
		},
		formGroup: {
			wrapper: 'relative',
			error: 'text-red-500 absolute top-[80%] left-0 text-sm',
			help: 'absolute top-full left-0 font-medium text-grey-2',
			label: {
				base: 'block font-medium dark:text-grey text-base'
			}
		},
	}
});
