<template>
    <h1 v-show="characterList.length">{{ title }}</h1>
    <p v-if="characterList.length === 0">There are no characters</p>
    <ul v-else>
        <div v-for="character in characterList" :key="character.name">
            <base-character :character="character" />
            <button type="submit" @click="$emit('addToFavourite', character)">Favourite</button>
        </div>


    </ul>
</template>

<script>
import BaseCharacter from './BaseCharacter.vue';

export default {
    components: {
        BaseCharacter
    },
    props: {
        characterList: {
            type: Array
        },
        title: String
    },
}
</script>