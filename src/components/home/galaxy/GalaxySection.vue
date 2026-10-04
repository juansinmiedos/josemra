<template>
  <div class="galaxy">
    <div class="galaxy-container">
      <GalaxyItem
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumbnail"
        :id="`item${index + 1}`"
        :alt="image.alt"
        @click="openViewer(index)"
      />
    </div>
  </div>

  <Teleport to="body">
    <ImageViewer
      v-if="selectedIndex !== null"
      :images="images"
      :current-index="selectedIndex"
      @close="closeViewer"
      @previous="previousImage"
      @next="nextImage"
    />
  </Teleport>
</template>

<script setup>
import { ref } from "vue"
import { galaxyImages } from "./galaxyImages.js"
import GalaxyItem from "./GalaxyItem.vue"
import ImageViewer from "../../ImageViewer.vue"

const images = galaxyImages
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
