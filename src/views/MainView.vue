<template>
  <header>
    <!-- NavBar -->
  </header>

  <main>
    <RouterView :key="route.fullPath" />
  </main>

  <!-- Footer -->
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
