<script>
export default {
    props: ['value']
}
</script>

<template>
    <button type="submit">{{ value }}</button>
</template>

<style>
button[type='submit'] {
    padding-inline: 20px;
    padding-block: 10px;
    border: none;
    cursor: pointer;
    background-color: #427D9D;
    color: white;
    font-size: medium;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
}

button[type='submit']:hover {
    background-color: #164863;
}
</style>
