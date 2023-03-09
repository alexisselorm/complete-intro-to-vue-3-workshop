<template>
    <li>
        <p>{{ character.name }}</p>

    </li>
</template>

<script>
export default {
    props: {
        character: Object
    }
}
</script>