<script>
export default {
    props: ['value']
}
</script>

<template>
    <button type="submit">{{ value }}</button>
</template>

<style scoped>
button[type='submit'] {
    padding-inline: 30px;
    padding-block: 10px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: larger;
    background-image: linear-gradient(to right, #003a62, #003a62 50%, white 50%, white);
    color: white;
    background-size: 200% 100%;
    transition: all 0.2s ease-in-out;
}

button[type='submit']:hover {
    background-position: -100% 0;
    color: black;
}
</style>
