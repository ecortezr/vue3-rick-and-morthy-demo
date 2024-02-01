# vue3-rick-and-morthy-demo

This vue app shows a demo of how build a component based on a [Figma design](). The component is `CharacterCard` and its function is to show some details from the [Rick and Morty Restful API]().

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

The target component `CharacterCard` receive two props to produce a result. The first one is an object with the character data and the second one is related to be a favorite or not.

This is the description of the expected object:

```json
type Location = {
    name: string;
    url: string;
}

interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}
```

and this is the props definition:

```ts
const props = defineProps<{
    characterData: ICharacter,
    isFavorite?: boolean
}>()
```

The optional `isFavorite` prop is `false` by default.

In the main Component `App` was created a sort of implementation for the component `CharacterCard`. Basically, I calculate a random number, to define the `id` to use when call the `character` endpoint. At the same time, a boolean is generated randomly to define if the character is a favorite or not.

```vue
<script setup lang="ts">
import type { ICharacter } from '@/types'
import CharacterCard from './components/CharacterCard.vue'
import { useFetch } from '@/composables/fetchData';

function randomRangeNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const { data } = useFetch<ICharacter>(`https://rickandmortyapi.com/api/character/${randomRangeNumber(1, 800)}`);

</script>

<template>
  <main>
    <CharacterCard
        v-if="data"
        :is-favorite="randomRangeNumber(0, 1) === 1"
        :character-data="data"
        />
  </main>
</template>
```

IMPORTANT: This is a [Vite](https://vitejs.dev/) project. You can see details on [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

