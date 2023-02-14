<template>
	<div class="container-description">
		<div class="accordeon">
			<h4>{{ title }}</h4>
			<div @click="toggle()" class="img-container">
				<img
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
	padding: 10px 10px;
	height: 25px;
	background-color: $primary;
	color: #f1f1f1;
	width: 100%;

	span {
		color: #f1f1f1;
	}
}

.container-paragraph {
	background-color: #f7f7f7;
	border-radius: 5px;
	p {
		padding: 10px;
	}
}
.arrowUp {
	transform: rotate(180deg);
}
</style>
S
