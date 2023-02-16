<template>
	<div class="container-picture">
		<img v-for="image in picture" class="picture" :src="image" :alt="props.name?.title" />
	</div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';

const props = defineProps(['name']);

const picture = ref(props.name?.pictures);
</script>

<style scoped lang="scss">
.container-picture {
	position: relative;

	width: 100%;
	height: 290px;
	.picture {
		position: absolute;
		border-radius: 10px;
		margin-top: 20px;
		margin-bottom: 50px;
		width: 100%;
		height: 280px;
	}
}
</style>
