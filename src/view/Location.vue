<template>
	<Navigation />
	<div class="container-location">
		<div class="container-picture">
			<img class="picture" :src="nItem?.pictures[2]" :alt="nItem?.title" />
			<h2>{{ nItem?.title }}</h2>
			<h4>{{ nItem?.location }}</h4>
		</div>
		<div class="container-tag">
			<div class="tag" v-for="(tag, index) in nItem?.tags" :key="index">
				<p>{{ tag }}</p>
			</div>
		</div>

		<div class="container-star-host">
			<div class="container-star">
				<div class="star" v-for="i in rating">
					<img v-if="nItem.rating >= i" src="../assets/images/star.svg" />
					<img v-else src="../assets/images/star-empty.svg" />
				</div>
			</div>
			<div class="host">
				<div class="wrapper-host">
					<p>{{ nItem?.host.name }}</p>
				</div>

				<img :src="nItem?.host.picture" />
			</div>
		</div>

		<Accordeon :name="nItem.description" title="Description" />
		<AccordeonEquipement :name="nItem.equipments" title="Equipements" />
	</div>
</template>

<script setup lang="ts">
import item from '../assets/ressources.json';
import { useRoute } from 'vue-router';
import Navigation from '../components/Navigation.vue';
import Accordeon from '@/components/Accordeon.vue';
import AccordeonEquipement from '@/components/Accordeon-equipements.vue';

import { ref } from '@vue/reactivity';

const route = useRoute();
const nItem: Object | any = ref(item.find((item) => item.id === route.params.id));
const picture = ref(nItem.value?.pictures);
const rating = 5;
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';

.container-location {
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	color: $primary;
}
.container-picture {
	width: 100%;
	height: auto;
	img {
		border-radius: 10px;
		margin-top: 20px;
		width: 100%;
		height: 280px;
	}
}
.container-tag {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	.tag {
		align-self: center;
		margin: 10px 10px 10px 0px;
		background-color: $primary;
		font-size: 14px;
		color: #f1f1f1;
		padding: 5px;
		border-radius: 5px;
	}
}
.container-star-host {
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	width: 100%;
	.container-star {
		display: flex;
		width: 50%;
		.star {
			margin-right: 10px;
		}
	}
}
.host {
	width: 50%;
	font-size: 16px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	.wrapper-host {
		display: block;
		margin-right: 20px;
	}
	img {
		align-self: flex-end;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		object-fit: cover center;
	}
}
</style>
