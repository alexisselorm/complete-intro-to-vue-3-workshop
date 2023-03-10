<template>
    <input type="text" v-model="newChar.name" @keyup.enter="addnewchar" />
</template>

<script>
export default {
    emits: ['addnewchar'],
    data: () => ({
        newChar: {
            name: "",
            elements: [],
        },
    }),
    methods: {
        addnewchar() {
            this.$emit('addnewchar', this.newChar);
            this.newChar = {
                name: "",
                elements: ''
            };
        },
    }
}
</script>   