<template>
  <HomeLayout>

    <!-- Make this section only visible from tablet up -->
    <GalaxySection />
    <!-- make a section for for tablet down, regular grid -->

  </HomeLayout>
</template>

<script setup>
import HomeLayout from '@/layouts/HomeLayout.vue'
import GalaxySection from '@/components/home/GalaxySection.vue'
</script>
