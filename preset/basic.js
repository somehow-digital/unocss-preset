import styles from '@somehow-digital/styles';
import { definePreset, presetIcons, presetWind4, transformerDirectives, transformerVariantGroup } from 'unocss';

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
		transformers: [
			transformerVariantGroup(),
			transformerDirectives(),
		],
		preflights: [
			{
				getCSS: () => styles,
			},
		],
	};
});
