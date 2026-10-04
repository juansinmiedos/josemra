<template>
  <div class="viewer" @click="emit('close')">

    <button
      class="viewer-close"
      type="button"
      aria-label="Cerrar galería"
      @click="$emit('close')"
    >
      ×
    </button>

    <button
      class="viewer-nav viewer-nav--previous"
      type="button"
      aria-label="Imagen anterior"
      @click.stop="$emit('previous')"
    >
      ‹
    </button>

    <img
      class="viewer-image"
      :src="images[currentIndex].src"
      :alt="images[currentIndex].id"
      @click.stop
    />

    <button
      class="viewer-nav viewer-nav--next"
      type="button"
      aria-label="Siguiente imagen"
      @click.stop="$emit('next')"
    >
      ›
    </button>

    <div class="viewer-counter">
      {{ currentIndex + 1 }}/{{ images.length }}
    </div>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue"

const emit = defineEmits(["close", "previous", "next"])

defineProps({
  images: {
    type: Array,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
})

onMounted(() => {
  window.addEventListener("keydown", handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown)
})

const handleKeydown = (event) => {
  if (event.key === "Escape") {
    emit("close")
  }

  if (event.key === "ArrowLeft") {
    emit("previous")
  }

  if (event.key === "ArrowRight") {
    emit("next")
  }
}
</script>

<style lang="scss" scoped>
.viewer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);

  &-image {
    max-width: 85vw;
    max-height: 85vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 4px;
  }

  &-close {
    position: absolute;
    top: 24px;
    right: 32px;
    border: 0;
    background: transparent;
    color: white;
    font-size: 40px;
    line-height: 1;
    cursor: pointer;
    z-index: 2;
  }

  &-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    background: transparent;
    color: white;
    font-size: 64px;
    line-height: 1;
    cursor: pointer;
    padding: 20px;

    &--previous {
      left: 24px;
    }

    &--next {
      right: 24px;
    }
  }

  &-counter {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 14px;
  }
}
</style>