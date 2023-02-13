<template>
	<Navigation />
	<div class="container-imgAbout">
		<img src="../components/images/About-mobile.jpg" alt="landscape" />
	</div>
	<div class="container-rules">
		<Accordeon title="Fiabilité" :name="about.Fiabilite" />
		<Accordeon title="Respect" :name="about.Respect" />
		<Accordeon title="Services" :name="about.Securité" />
		<Accordeon title="Securité" :name="about.Service" />
	</div>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import Accordeon from '@/components/Accordeon.vue';
import about from '../assets/about.json';
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';
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
