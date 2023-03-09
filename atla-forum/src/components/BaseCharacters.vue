<template>
    <character-list title="All Characters" :character-list="characterList" @addToFavourite="addToFavorites" />
    {{ averageHeight }} is the average Height
    <p>{{ averageAge }} is the average</p>

    <ul>
        <li v-for="(bender, element) in benders" :key="`element-${bender}`">{{ element }} {{ bender }}</li>
    </ul>

    <character-list title="Favourites" :character-list="favourites" />
</template>
<script>
import CharacterList from './CharacterList.vue';
export default {
    components: { CharacterList },
    data() {
        return {
            characterList: [
                {
                    name: "Aang",
                    age: 150,
                    height: 120,
                    elements: ["Fire", "Air", "Water", "Earth"],
                },
                {
                    name: "Zuko",
                    age: 21,
                    height: 109,
                    elements: ["Fire"],
                },
                {
                    name: "Toph",
                    age: 11,
                    height: 135,
                    elements: ["Earth"],
                },
                {
                    name: "Katara",
                    age: 19,
                    height: 137,
                    elements: ["Water"],
                },
            ],
            favourites: [],
            newChar: {
                name: "",
                elements: [],
            },
        }
    },
    methods: {
        addToFavorites(character) {
            this.favourites.push(character);
        },
        removeFromFavourite(index) {
            this.favourites.splice(index, 1);
        },
        addnewchar() {
            this.characterList.push(this.newChar);
            this.newChar = {
                name: "",
            };
        },
    },
    computed: {

        averageHeight() {
            return (
                this.characterList.reduce((acc, per) => acc + per.height, 0) /
                this.characterList.length
            );
        },
        averageAge() {
            return (
                this.characterList.reduce((acc, person) => acc + person.age, 0) /
                this.characterList.length
            );
        },
        benders() {
            const elements = ["Fire", "Air", "Water", "Earth"];
            const stats = {
                Air: 0,
                Water: 0,
                Earth: 0,
                Fire: 0,
            };

            this.characterList.forEach((character) => {
                elements.forEach((element) => {
                    if (character.elements.includes(element)) {
                        stats[element] += 1;
                    }
                });
            });
            return stats;
        },

    },
}
</script>