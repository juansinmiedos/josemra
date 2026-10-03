<template>
  <div class="home">

    <!-- Make this section only visible from tablet up -->
    <GalaxySection />

    <!-- make a section for for tablet down, regular grid -->
  </div>
</template>

<script setup>
import GalaxySection from '@/components/home/GalaxySection.vue'
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
