<script setup lang="ts">
import type { ICharacter } from '@/types'
import CharacterCard from './components/CharacterCard.vue'
import { useFetch } from '@/composables/fetchData';

function randomRangeNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const { data: characterData } = useFetch<ICharacter>(`https://rickandmortyapi.com/api/character/${randomRangeNumber(1, 800)}`);

</script>

<template>
  <main>
    <CharacterCard v-if="characterData" :is-favorite="randomRangeNumber(0, 1) === 1" :character-data="characterData" />
    <CharacterCard v-if="characterData" :is-favorite="randomRangeNumber(0, 1) === 1" :character-data="characterData" />
    <CharacterCard v-if="characterData" :is-favorite="randomRangeNumber(0, 1) === 1" :character-data="characterData" />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
}
</style>
