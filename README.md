# `unocss` presets

> Shared `unocss` presets for `somehow.digital` projects.

---

**install**

```sh
pnpm add -D @somehow-digital/unocss-preset
```

**use**

```js
import basic from '@somehow-digital/unocss-preset';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [basic()],
});
```
