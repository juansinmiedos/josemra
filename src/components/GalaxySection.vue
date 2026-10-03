<template>
  <div class="galaxy">
    <div class="galaxy-container">
      <GalaxyItem
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :id="`item${index + 1}`"
      />
    </div>
  </div>
</template>

<script setup>
import GalaxyItem from "./GalaxyItem.vue"

const images = Object.entries(
  import.meta.glob("@/assets/galaxy/thumbnails/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
  })
)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/(\d+)\.webp$/)?.[1])
    const numB = Number(b.match(/(\d+)\.webp$/)?.[1])

    return numA - numB
  })
  .map(([, image]) => image)
</script>

<style lang="scss" scoped>
.galaxy {
  padding: 32px 64px;
  display: flex;
  justify-content: flex-end;

  &-container {
    width: 80%;
    display: grid;
    grid-template: repeat(32, 1fr) / repeat(30, 1fr);

    @media (orientation: landscape) {
      height: 60vh;
      // padding: 40px 20px;
      gap: 6px;
    }

    @media (orientation: portrait) {
      height: 40vh;
      // padding: 16px 8px;
      gap: 4px;
    }
  }
}
</style>
