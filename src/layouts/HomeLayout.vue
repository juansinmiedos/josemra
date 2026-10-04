<template>
  <div class="home-scroll-container">
    <div class="navbar-sticky-wrapper">
      <TheNavbar variant="home" />
    </div>

    <div class="home">
      <slot></slot>
      <TheFooter />
    </div>

  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style lang="scss" scoped>
.home-scroll-container {
  height: calc(150vh - 126px); 
  position: relative;
}

.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}

.navbar-sticky-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(150vh - 126px); 
  z-index: 1;
  pointer-events: none; /* No bloquea clicks al fondo */
}
</style>
