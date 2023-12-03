<template>
    <v-app dark>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else-if="error.statusCode === 403">
        {{ forbidden }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/"> Home page </NuxtLink>
    </v-app>
  </template>
  
  <script>
  export default {
    layout: 'empty',
    props: {
      error: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        pageNotFound: '404 Not Found',
        forbidden: 'You are not authorized to access this page',
        otherError: 'An error occurred',
      }
    },
    head() {
      const title =
        this.error.statusCode === 404 ? this.pageNotFound : (this.error.statusCode === 404 ? this.forbidden : this.otherError)
      return {
        title,
      }
    },
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 20px;
  }
  </style>
  