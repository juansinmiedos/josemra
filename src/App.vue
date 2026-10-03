<template>
  <!-- Add Navbar -->
  <RouterView />

  <!-- Add footer with lang control -->
   <TheFooter />
</template>

<script setup>
import TheFooter from './components/TheFooter.vue'
</script>
