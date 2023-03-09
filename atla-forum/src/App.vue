<script>
export default {
  data: () => ({
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
  }),
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
}

</script>

<template>
  <p v-if="characterList.length === 0">There are no characters</p>
  <ul v-else>
    <li v-for="character in characterList" :key="character.name">
      <p>{{ character.name }}</p>
      <button @click="addToFavorites(character)">Favourite</button>
    </li>
  </ul>
  <p>
    <span v-for="(character, index) in characterList" :key="`character-${index}`">{{ character.name }}{{ index ===
      characterList.length - 1 ? '' :
      ',' }}
    </span>
  </p>
  {{ averageHeight }} is the average Height
  <p>{{ averageAge }} is the average</p>
  <ul>
    <li v-for="(bender, element) in benders" :key="`element-${bender}`">{{ element }} {{ bender }}</li>
  </ul>
  Age
  <div>
    <ul v-if="favourites.length">
      <h2>Favourites</h2>
      <li v-for="(character, index) in favourites" :key="`character-${index}`">
        <p>{{ character.name }}</p>
        <button @click="removeFromFavourite(index)">Unfavourite</button>
      </li>
    </ul>
    <p v-else>No favourites yet</p>
  </div>
</template>

