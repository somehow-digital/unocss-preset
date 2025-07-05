import { definePreset, presetIcons, presetWind4, transformerVariantGroup } from 'unocss';

export default definePreset(() => {
	return {
		name: 'basic',
		presets: [
			presetWind4({
				preflights: {
					reset: true,
				},
			}),
			presetIcons(),
		],
		transformers: [transformerVariantGroup()],
	};
});
