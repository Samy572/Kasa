<template>
	<div class="container-equipments">
		<div class="accordeon">
			<h4>{{ props.title }}</h4>
			<div @click="toggle()">
				<img
					class="img-container"
					:class="{
						arrowUp: arrowDown,
					}"
					src="../assets/images/Arrows.svg"
					alt="dérouler"
				/>
			</div>
		</div>
		<div v-if="active" class="container-paragraph">
			<div class="equipement" v-for="(item, index) in props.name">
				<p v-if="active">{{ item }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
const props = defineProps({
	name: Array,
	title: String,
});

const active = ref(false);
const arrowDown = ref(true);


function toggle() {
	active.value = !active.value;
	arrowDown.value = !arrowDown.value;
}
</script>
<style scoped lang="scss">
@import '../assets/scss/base.scss';
.container-equipments {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
}

.accordeon {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 10px;
	height: 25px;
	background-color: $primary;
	padding: 15px;
	border-radius: 10px;
	color: #f1f1f1;
	width: 100%;
	margin-top: 30px;

	span {
		color: #f1f1f1;
	}
}
.equipement {
	width: 100%;
	padding: 5px;
}

.container-paragraph {
	width: 100%;
	min-height: 110px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	border-radius: 5px;
	background-color: #f7f7f7;
	border-radius: 10px;
	margin-bottom: 10px;
}
.img-container {
	cursor: pointer;
	transform: rotate(180deg);
}
.arrowUp {
	cursor: pointer;
	transform: rotate(0deg);
}

@media screen and (min-width: 850px) {
	.container-description {
		margin: 0 auto;
		width: 750px auto;
	}
	.accordeon {
		height: 47px;
		h4 {
			font-size: 20px;
			font-weight: 500;
		}
	}
}
</style>
S
