<template>
	<Navigation />
	<section class="About">
		<div class="container-imgAbout">
			<img src="../assets/images/About-mobile.jpg" alt="landscape" />
		</div>
		<div class="container-rules">
			<Accordeon title="Fiabilité" :name="about.Fiabilite" />
			<Accordeon title="Respect" :name="about.Respect" />
			<Accordeon title="Services" :name="about.Service" />
			<Accordeon title="Securité" :name="about.Securité" />
		</div>
	</section>
	<Foot />
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import Accordeon from '@/components/Accordeon.vue';
import about from '../assets/about.json';
import Foot from '@/components/Foot.vue';
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';
.About {
	width: 100%;
	height: auto;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
.container-imgAbout {
	height: 300px;
	margin-top: 50px;

	img {
		width: 100%;
		height: 223px;
		border-radius: 10px;
		filter: brightness(90%);
	}
}

.container-rules {
	color: $primary;
}
</style>
