<script>
export default {
  data() {
    return {
      isOpen: true
    }
  }
}
</script>

<template>
  <title>Nuxt JS</title>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  height: 100vh;
  margin: 0;
  font-family: monospace;
}

#__nuxt {
  height: 100%;
}

.main-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100%;
  transition: all 0.3s ease-in-out;
}

.active {
  grid-template-columns: 0px 1fr;
}
</style>
