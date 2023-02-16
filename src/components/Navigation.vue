<template>
	<div id="nav">
		<nav>
			<div class="logo">
				<img src="../assets/images/LOGO.svg" alt="Kasa" />
			</div>
			<ul>
				<li><RouterLink to="/">Accueil</RouterLink></li>
				<li><RouterLink :to="{ name: 'about' }">A Propos</RouterLink></li>
				<RouterView />
			</ul>
		</nav>
	</div>
</template>

<script setup lang="ts">
import router from '@/router';
</script>

<style scoped lang="scss">
@import '../assets/scss/base.scss';
nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 10px;
	height: 63px;
	width: 100%;
	.logo {
		padding-top: 20px;
		height: 63px;
		width: 150px;
	}
	ul {
		height: 63px;
		padding-top: 20px;
		list-style-type: none;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 200px;
	}
	a {
		text-decoration: none;
		font-size: 14px;
		font-weight: 500;
		color: $primary;
		text-transform: uppercase;
		cursor: pointer;
	}
	.router-link-active {
		text-decoration: underline;
	}
}
@media screen and (min-width: 850px) {
	.router-link{
		font-size: 24px;
	}
}
</style>
