import {
	definePreset,
	presetIcons,
	presetMini,
	transformerVariantGroup,
} from 'unocss';

export default definePreset(() => {
	return {
		name: 'basic',
		presets: [presetMini(), presetIcons()],
		transformers: [transformerVariantGroup()],
	};
});
