<template>
	<Navigation />
	<div class="container">
		<div class="container404">
			<h2>404</h2>
			<p>Oups! La page que</p>
			<p class="comeBack">vous demandez n'éxiste pas.</p>
			<RouterLink to="/">Retourner sur la page d'accueil</RouterLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import Navigation from '@/components/Navigation.vue';
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';

.container404 {
	color: $primary;
	height: 100vh;
	transform: translateY(27%);
	text-align: center;
	h2 {
		font-size: 96px;
		font-weight: 700;
		margin-bottom: 11px;
	}
	p {
		font-size: 18px;
		font-weight: 500;
	}
	.comeBack {
		margin-bottom: 133px;
	}
}
a {
	color: $primary;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
}
</style>
