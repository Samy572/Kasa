<template>
	<section id="About">
		<Navigation />

		<div class="imgAbout">
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

<style lang="scss">
@import '../assets/scss/base.scss';
#About {
	width: 100%;
	min-height: 100vh;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
}
.imgAbout {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 300px;
	margin-top: 50px;
	width: 100%;
	img {
		object-fit: cover;
		width: 1233px;
		height: 223px;
		border-radius: 10px;
		filter: brightness(90%);
	}
}

.container-rules {
	color: $primary;
	margin: 0;
	padding: 0;

}
@media screen and (min-width: 850px) {
	#About {
		padding: 0 75px;
		p {
			padding: 36px 30px 20px 20px;
			line-height: 34px;
			font-size: 24px;
		}
	}
}
</style>
