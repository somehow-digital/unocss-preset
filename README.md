# `unocss` presets

> Shared `unocss` presets for `somehow.digital` projects.

---

**install**

```sh
pnpm add -D @somehow-digital/unocss-preset
```

**use**

```js
import { defineConfig } from 'unocss';
import basic from '@somehow-digital/unocss-preset';

export default defineConfig({
  presets: [basic()],
});
```
