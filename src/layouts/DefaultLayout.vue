<template>
  <header>
    <TheNavbar />
  </header>

  <main>
    <!-- La anchura mínima de main debe ser 100vh - altura de navbar y altura de footer -->
    <slot></slot>
  </main>

  <TheFooter />
</template>

<script setup>
import { useRoute } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
