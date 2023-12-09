<script>
import nuxtStorage from 'nuxt-storage';

export default {
  data() {
    return {
      isOpen: true
    }
  },
  mounted() {
    const user = nuxtStorage.localStorage.getData("user");
    if (user) {
      const path = nuxtStorage.localStorage.getData("path");
      navigateTo(path);
    } else {
      navigateTo('/');
    }
  }
}
</script>

<template>
  <title>DatACT</title>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  height: 100vh;
  margin: 0;
   font-family: 'Arial';
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
