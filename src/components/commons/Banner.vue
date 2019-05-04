<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in List" :key="index">
					<img :src="item">
				</div>
			</div>

			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import Vue from 'vue'

	export default {
		name: 'Banner',
		components: {},
		data() {
			return {
				name: 'Banner',
				List: []
			}
		},
		methods: {
			getList() {
				setTimeout(() => {
					this.List = [
						"../../../static/images/20180820_8d83670f6128a6bf4b2fdc6155c181e1_wmk.jpeg",
						"../../../static/images/24f741707fc347c88c3607bddb164444.jpg",
						"../../../static/images/342ac65c103853437fb867df9a13b07ecb8088dd.jpg",
						"../../../static/images/au2131951.jpg",
						"../../../static/images/d1160924ab18972b07c03741edcd7b899f510a46.jpg"
					]
					Vue.nextTick(() => {
						new Swiper('.swiper-container', {
							spaceBetween: 30,
							centeredSlides: true,
							autoplay: {
								delay: 2500,
								disableOnInteraction: false,
							},
							pagination: {
								el: '.swiper-pagination',
								clickable: true,
							},
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							},
						});
					})
				})
//				console.log(1111111);
			}
		},
		created() {
			this.getList();
//			console.log(1111111);
//			console.log(this.List);
		},
		mounted() {

		}

	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	@import url("../../../node_modules/swiper/dist/css/swiper.css");
	.banner {
		
		.swiper-container {
			.swiper-wrapper {
				width: 745px;
				height: 340px;
				.swiper-slide {
					width: 745px;
					height: 340px;
					img {
						width: 745px;
						height: 340px;
					}
				}
			}
		}
	}
</style>