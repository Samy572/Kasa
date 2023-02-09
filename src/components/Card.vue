<template>
	<div class="container">
		<div class="location">
			<div class="h2">
				<h2>Chez vous,<br />partout et ailleurs</h2>
			</div>
			<div class="container-img"><img src="./images/Chez-vous.jpg" /></div>
		</div>
	</div>
	<div class="container-allCards">
		<RouterLink v-for="(items, index) in item" :key="index" :to="`location/${items.id}`">
			<div class="card">
				<img :src="items.cover" :alt="items.title" />
				<h3>{{ items.title }}</h3>
			</div>
		</RouterLink>
	</div>
</template>

<script setup lang="ts">
import item from '../assets/ressources.json';

import { RouterLink } from 'vue-router';
import { ref } from '@vue/reactivity';


</script>

<style scoped lang="scss">
.container {
	margin-top: 30px;
	position: relative;
	height: 140px;
	width: 100%;
	display: flex;
	justify-content: center;
}

.location .h2 {
	position: absolute;
	font-size: 12px;
	top: 20%;
	padding-left: 20px;
	color: white;
	z-index: 2;
}
.container-img {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		object-fit: cover center;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		border: solid 0.1px rgb(242, 239, 234);
		filter: brightness(50%);
	}
}
.container-allCards {
	margin-top: 25px;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
}

.card {
	position: relative;
	width: 100%;
	height: 250px;
	margin-bottom: 25px;
	img {
		border-radius: 15px;
		width: 100%;
		height: 100%;
		object-fit: cover center;
		filter: brightness(70%);
	}
	h3 {
		position: absolute;
		bottom: 5%;
		padding-left: 10px;
		font-size: 16px;
		color: white;
	}
}
</style>
