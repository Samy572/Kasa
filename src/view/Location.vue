<template>
	<div id="Location">
		<Navigation />
		<Carousel :name="nItem" />
		<div class="container-location">
			<div class="container-title">
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
			<div class="container-accordeon">
				<Accordeon :name="nItem.description" title="Description" />
				<AccordeonEquipement :name="nItem.equipments" title="Equipements" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import item from '../assets/ressources.json';
import { useRoute } from 'vue-router';
import Navigation from '../components/Navigation.vue';
import Carousel from '../components/Carousel.vue';
import Accordeon from '@/components/Accordeon.vue';
import AccordeonEquipement from '@/components/Accordeon-equipements.vue';

import { ref } from '@vue/reactivity';

const route = useRoute();
const nItem: Object | any = ref(item.find((item) => item.id === route.params.id));

const rating = 5;
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';

#Location {
	padding: 0 10px;
}
.container-location {
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	color: $primary;
}
.container-title {
	margin: 20px 0;
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

@media screen and (min-width: 750px) {
	#Location {
		padding: 0 75px;
	}
	.container-location {
		margin-top: 40px;
	}
	.container-picture {
		margin-top: 50px;
		.picture {
			height: 415px;
		}
	}
	.container-accordeon {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-gap: 100px;
	}
	.container-star img {
		height: 24px;
	}
}
</style>
