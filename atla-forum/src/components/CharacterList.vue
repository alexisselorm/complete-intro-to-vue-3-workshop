<template>
    <h1 v-show="characterList.length">{{ title }}</h1>
    <p v-if="characterList.length === 0">There are no characters</p>
    <ul v-else>
        <div v-for="character in characterList" :key="character.name">
            <base-character :character="character" />
            <BaseButton text="Hi" icon="siuu" type="submit" @click="$emit('addToFavourite', character)">Arrow Left Hi
            </BaseButton>
        </div>


    </ul>
</template>

<script>
import BaseCharacter from './BaseCharacter.vue';
import BaseButton from './BaseButton.vue';
export default {
    components: {
        BaseCharacter,
        BaseButton
    },
    emits: ['addToFavourite'],
    props: {
        characterList: {
            type: Array
        },
        title: String
    },
}
</script>