<template>
	<div class="location">
		<div class="h2">
			<h2>Chez vous,<br />partout et ailleurs</h2>
		</div>
		<div class="container-img"><img src="../assets/images/Chez-vous.jpg" /></div>
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
.location {
	position: relative;
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
	margin-top: 30px;
	height: 150px;
	width: 100%;
	display: flex;
	align-items: center;
	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		border: solid 0.1px rgb(242, 239, 234);
		filter: brightness(60%);
	}
}
.container-allCards {
	margin-top: 25px;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
}
h2 {
	font-size: 2em;
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

@media screen and (min-width: 850px) {
	.container-img {
		margin-top: 120px;
		img {
			height: 270px;
		}
	}
	.container-allCards {
		margin-top: 120px;
		background-color: #f7f7f7;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		padding: 10px;
		grid-gap: 40px;
		img {
			height: 320px;
		}
	}
	.card {
		margin: 0;
		width: 100%;
		height: 80%;
		margin: 0;

		h3 {
			top: 65%;
			max-width: 80%;
			line-height: 30px;
			font-size: 18px;
			font-weight: 500;
		}
	}
}


</style>
