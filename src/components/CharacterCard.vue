<script setup lang="ts">
import type { ICharacter, IEpisode } from '@/types';
import { useFetch } from '@/composables/fetchData';
import FavoriteIcon from './icons/IconFavorite.vue'
import FavoriteActiveIcon from './icons/IconFavoriteActive.vue'
import { computed } from 'vue';
 
const props = defineProps<{
    characterData: ICharacter,
    isFavorite?: boolean
}>()

const {
    episode,
    image,
    location: { 
        name: locationName 
    },
    name,
    species,
    status
} = props.characterData;

const [firstEpisode] = episode;

const { data: episodeData } = useFetch<IEpisode>(firstEpisode);

const classObject = computed(() => ({
  'card__status--alive': status === 'Alive',
  'card__status--dead': status === 'Dead',
  'card__status--unknown': status === 'unknown'
}))
</script>

<template>
    <div class="card">
        <div class="card__content">
            <img class="card__image" :src="image" />
            <div class="card__favorite">
            </div>
            <div class="card__star-container">
                <FavoriteActiveIcon v-if="isFavorite"/>
                <FavoriteIcon v-else/>
            </div>
            <div class="card__status" :class="classObject">
            </div>
            <div class="card__content--text card__status-species">
                {{ status}} -  {{ species }}
            </div>
            <div class="card__content--text card__character-name">
                {{ name }}
            </div>
            <div class="card__content--text card__last-location-label">
                Last known location:
            </div>
            <div class="card__content--text card__last-known-location">
                {{ locationName }}
            </div>
            <div class="card__content--text card__first-seen-in-label">
                First seen in:
            </div>
            <div class="card__content--text card__first-seen-in">
                {{ (episodeData) ? episodeData.name : "" }}
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    align-self: auto;
    height: 140px;
    position: relative;
    min-width: 326px;
    margin: 5px;
}

.card__content {
    height: 140px;
    left: 0px;
    top: 0px;
    border-radius: 10px;
    border: 1px #E0E0E0 solid
}

.card__image {
    width: 140px;
    height: 140px;
    left: 0px;
    top: 0px;
    position: absolute;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px
}

.card__favorite {
    width: 30px;
    height: 30px;
    left: 101px;
    top: 105px;
    position: absolute;
    background: #F2F2F2;
    border-radius: 9999px
}

.card__star-container {
    width: 18px;
    height: 18px;
    left: 107px;
    top: 111px;
    position: absolute
}

.card__star {
    width: 16.72px;
    height: 18px;
    left: 0.64px;
    top: -0px;
    position: absolute;
    background: #828282
}

.card__status {
    width: 6px;
    height: 6px;
    left: 155px;
    top: 20px;
    position: absolute;
    border-radius: 9999px
}

.card__status--alive {
    background: #27AE60;
}

.card__status--dead {
    background: #EB5757;
}

.card__status--unknown {
    background: #4F4F4F;
}

.card__content--text {
    position: absolute;
    font-weight: 400;
    word-wrap: break-word
}
.card__status-species {
    height: 15px;
    left: 167px;
    top: 15px;
    color: #4F4F4F;
    font-size: 10px;
}

.card__character-name {
    left: 155px;
    top: 30px;
    color: black;
    font-size: 16px;
}

.card__last-location-label {
    height: 15px;
    left: 155px;
    top: 58px;
    color: #828282;
    font-size: 10px;
}

.card__last-known-location {
    height: 15px;
    left: 155px;
    top: 73px;
    color: black;
    font-size: 12px;
}

.card__first-seen-in-label {
    height: 15px;
    left: 155px;
    top: 97px;
    color: #828282;
    font-size: 10px;
}

.card__first-seen-in {
    height: 15px;
    left: 155px;
    top: 112px;
    color: black;
    font-size: 12px;
}
</style>