<template>
	<div class="footer">
		<img src="../assets/images/LOGO.svg" />
		<p>ⓒ 2020 Kasa. All rights reserved</p>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
	display: flex;
	background: #000;
	height: 209px;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	img {
		filter: invert(50%);
	}
	p {
		margin-top: 20px;
		color: #f1f1f1;
		font-size: 20px;
	}
}
</style>
