<template>
	<div class="container-description">
		<div class="accordeon">
			<h4>{{ title }}</h4>
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
		<div class="container-paragraph">
			<p v-if="active">{{ props.name }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
const props = defineProps({
	title: String,
	name: String,
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
.container-description {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
}
.accordeon {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	margin-top: 30px;
	height: 25px;
	background-color: $primary;
	border-radius: 10px;
	color: #f1f1f1;
	width: 100%;

	span {
		color: #f1f1f1;
	}
}

.container-paragraph {
	border-radius: 5px;
	border-radius: 10px;
	width: 100%;
	display: flex;
	margin-bottom: 10px;

	p {
		background-color: #f7f7f7;
		line-height: 30px;
		min-height: 110px;
		padding: 10px;
		border-radius: 10px;
	}
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
