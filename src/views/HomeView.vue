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
  height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
