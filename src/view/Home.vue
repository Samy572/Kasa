<template>
	<Navigation />
	<div id="Home">
		<Card />
	</div>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue';
import Navigation from '../components/Navigation.vue';
</script>

<style scoped lang="scss">
@import '../src/assets/scss/base.scss';
#Home {
	padding: 0 10px;
}

@media screen and (min-width: 850px) {
	#Home {
		padding: 0 50px;
	}
}
</style>
