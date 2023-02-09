<template>
	<Navigation />
	<div class="container">
		<div class="container-img">
			<img :src="nItem?.cover" :alt="nItem?.title" />
			<h2>{{ nItem?.title }}</h2>
		</div>
		
	</div>
</template>

<script setup lang="ts">
import item from '../assets/ressources.json';
import { useRoute } from 'vue-router';
import Navigation from '../components/Navigation.vue';
import { ref } from '@vue/reactivity';
const route = useRoute();
const nItem = ref(item.find((item) => item.id === route.params.id));
console.log(nItem);
</script>

<style scoped lang="scss">
.container {
	display: grid;
	
	width: 100%;
	min-height: 100vh;
	.container-img {
		margin-top: 50px;
		width: 335px;
		height: 255px;
		img {
			object-fit: cover center;
			height: 100%;
			width: 100%;
			border-radius: 15px;
		}
	}
}
</style>
