<template>
	<div class="carousel">
		<div class="container-picture">
			<img
				v-for="(picture, index) in pictures"
				:key="index"
				class="picture"
				:class="{ active: activePicture === index }"
				:src="picture"
				:alt="props.name?.title"
			/>
			<div class="container-arrows">
				<img @click="sliderNext()" id="next" src="../assets/images/Arrows.svg" />
				<img id="previous" @click="slideLeft()" src="../assets/images/Arrows.svg" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
const props = defineProps(['name']);
const pictures = ref(props.name?.pictures);
const activePicture = ref(0);

function slideLeft() {
	activePicture.value = (activePicture.value - 1 + pictures.value.length) % pictures.value.length;
	console.log((activePicture.value - 1 + pictures.value.length) % pictures.value.length);
}

function sliderNext() {
	activePicture.value = (activePicture.value + 1) % pictures.value.length;
	console.log(activePicture.value);
}
</script>

<style scoped lang="scss">
.carousel {
	width: 100%;
	height: 320px;
	display: grid;
}
.container-picture {
	justify-self: center;
	position: relative;
	max-width: 965px;
	width: 100%;
	height: 320px;
	.picture {
		position: absolute;
		object-fit: scale-up;
		object-position: center;
		border-radius: 10px;
		margin-top: 20px;
		margin-bottom: 50px;
		width: 100%;
		height: 280px;
		display: none;
	}
	.active {
		display: block;
	}
}
.container-arrows {
	overflow: hidden;
	width: 100%;
	height: 100px;
	position: absolute;
	top: 40%;
}
#next,
#previous {
	z-index: 100;
	filter: grayscale(100%);
	height: 50px;
	width: 50px;
	cursor: pointer;
}
#next {
	position: absolute;
	right: 0%;
	transition: transform 0.3s ease;
	rotate: -90deg;
	&:hover {
		transform: scale(1.2);
	}
}

#previous {
	position: absolute;
	left: 0%;
	transition: transform 0.3s ease;
	rotate: 90deg;
	&:hover {
		transform: scale(1.2);
	}
}
@media screen and (min-width: 850px) {
	.container-picture {
		display: flex;
		justify-content: center;
	}
	.picture {
		max-width: 965px;
	}
}
</style>
