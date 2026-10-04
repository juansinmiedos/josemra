<template>
	<img :src="src" :alt="alt" class="galaxy-item" :class="`galaxy-item--${id}`">
</template>

<script setup>
defineProps({
  src: String,
  id: String,
	alt: {
		type: String,
		default: "",
	}
})
</script>

<style lang="scss" scoped>
.galaxy-item {
  object-fit: cover;
  width: 100%;
  height:100%;
  border-radius: 4px;

  transition:
    transform 0.35s ease,
    z-index 0s linear 0.35s;

  position: relative;

  &:hover {
    transform: scale(1.35);
    z-index: 10;
    cursor: pointer;
  }

	//items position (IDs)
	&--item1 {
		grid-area: 8/1/15/6;
	}
	&--item2 {
		grid-area: 4/6/15/13;
	}
	&--item3 {
		grid-area: 7/13/15/16;
	}
	&--item4 {
		grid-area: 7/16/15/19;
	}
	&--item5 {
		grid-area: 1/19/15/24;
	}
	&--item6 {
		grid-area: 7/24/15/27;
	}
	&--item7 {
		grid-area: 7/27/15/30;
	}
	&--item8 {
		grid-area: 15/4/23/11;
	}
	&--item9 {
		grid-area: 15/11/23/14;
	}
	&--item10 {
		grid-area: 15/14/23/17;
	}
	&--item11 {
		grid-area: 15/17/25/25;
	}
	&--item12 {
		grid-area: 15/25/25/29;
	}
	&--item13 {
		grid-area: 23/5/33/9;
	}
	&--item14 {
		grid-area: 23/9/30/12;
	}
	&--item15 {
		grid-area: 23/12/31/17;
	}
	&--item16 {
		grid-area: 25/17/33/20;
	}
	&--item17 {
		grid-area: 25/20/33/26;
	}
	&--item18 {
		grid-area: 25/26/33/31;
	}
}

</style>
