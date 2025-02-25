import { definePreset, presetIcons, presetMini } from 'unocss';

export default definePreset(() => {
	return {
		name: 'basic',
		presets: [presetMini(), presetIcons()],
	};
});
