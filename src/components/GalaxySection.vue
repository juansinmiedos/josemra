<template>
  <div class="galaxy">
    <div class="galaxy-container">
      <GalaxyItem
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumbnail"
        :id="`item${index + 1}`"
        @click="openViewer(index)"
      />
    </div>
  </div>

  <GalaxyViewer
    v-if="selectedIndex !== null"
    :images="images"
    :current-index="selectedIndex"
    @close="closeViewer"
    @previous="previousImage"
    @next="nextImage"
  />
</template>

<script setup>
import { ref } from "vue"
import GalaxyItem from "./GalaxyItem.vue"
import GalaxyViewer from "./GalaxyViewer.vue"

const thumbnails = import.meta.glob(
  "@/assets/galaxy/thumbnails/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
)

const originals = import.meta.glob(
  "@/assets/galaxy/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
)

const images = Object.entries(thumbnails)
  .sort(([a], [b]) => {
    const numA = Number(a.match(/(\d+)\.webp$/)?.[1])
    const numB = Number(b.match(/(\d+)\.webp$/)?.[1])
    return numA - numB
  })
  .map(([path, thumbnail]) => {
    const number = path.match(/(\d+)\.webp$/)?.[1]

    const originalPath = Object.keys(originals).find(
      (original) => original.endsWith(`/${number}.webp`)
    )

    return {
      id: `item${number}`,
      thumbnail,
      src: originals[originalPath],
    }
  })

const selectedIndex = ref(null)

const openViewer = (index) => {
  selectedIndex.value = index
}

const closeViewer = () => {
  selectedIndex.value = null
}

const previousImage = () => {
  selectedIndex.value =
    selectedIndex.value === 0
      ? images.length - 1
      : selectedIndex.value - 1
}

const nextImage = () => {
  selectedIndex.value =
    selectedIndex.value === images.length - 1
      ? 0
      : selectedIndex.value + 1
}
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
