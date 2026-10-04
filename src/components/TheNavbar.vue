<template>
  <nav class="navbar" :class="`navbar--${variant}`">
    <div class="logo">JOSEMRA</div>
    <div class="nav-links">
      <a href="#">portfolio</a>
      <a href="#">special projects</a>
      <a href="#">about + contact</a>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (v) => {
      return [
        "default",
        "home"
      ].includes(v)
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  width: calc(100% - 80px);
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--home {
    margin-top: calc(50vh - 126px); 
  }
}

.logo {
  font-weight: bold;
  font-size: 1.2rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  pointer-events: auto;
}

.nav-links a {
  text-align: end;
  font-weight: bold;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  color: black;
}

.nav-links a:hover {
  opacity: 1;
}
</style>
