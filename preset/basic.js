import {
	definePreset,
	presetIcons,
	presetWind4,
	transformerVariantGroup,
} from 'unocss';

export default definePreset(() => {
	return {
		name: 'basic',
		presets: [presetWind4(), presetIcons()],
		transformers: [transformerVariantGroup()],
	};
});
