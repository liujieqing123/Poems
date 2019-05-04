<template>
	<div class="sentence">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="header_picture">
					<img src="../../../../static/images/950235a1bd6aac9366430c4f310f1f86.jpg" />
				</div>
				<div class="sentence_list">
					<div class="tab">
						<div class="tab_item" @click="curId=0" :class="{'cur':curId === 0}">最新</div>
						<div class="tab_item" @click="curId=1" :class="{'cur':curId === 1}">热门</div>
					</div>
					<div class="new" v-if="curId === 0">
						<div class="new_list">
							<span>曾愿你一世长安，只是自你我相遇时，便乱了命弦，空了相安。</span>
							<span class="author">——离陌</span>
							<span class="author">《择一座城，遇一人终老》</span>
						</div>
						<div class="new_list">
							<span>曾愿你一世长安，只是自你我相遇时，便乱了命弦，空了相安。</span>
							<span class="author">——离陌</span>
							<span class="author">《择一座城，遇一人终老》</span>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="hot" v-if="curId === 1">
						<div class="new_list">
							<span>曾愿你一世长安，只是自你我相遇时，便乱了命弦，空了相安。</span>
							<span class="author">——离陌</span>
							<span class="author">《择一座城，遇一人终老》</span>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../../commons/Header.vue'
	import Footer from '../../commons/Footer.vue'
	export default {
		name: 'Sentence',
		components: {
			Header,Footer
		},
		data() {
			return {
				curId: 0

			}
		},
		methods: {

		}

	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.sentence {
		.main {
			background: #f3f3f3;
			padding: 20px 0;

			.container {
				.header_picture {
					width: 100%;
					height: 232px;

					img {
						width: 100%;
						height: 232px;
						cursor: pointer;
					}
				}

				.sentence_list {
					width: 900px;
					// height: 800px;
					background: #fff;
					box-shadow: 0 0 4px #ddd;
					border: 1px solid #ccc;
					margin-top: 35px;

					.tab {
						width: 860px;
						padding: 0px 20px;
						height: 48px;
						border-bottom: 1px solid #ccc;
						display: flex;
						justify-content: flex-start;

						.tab_item {
							font-size: 16px;
							color: @ft1-color;
							width: 72px;
							height: 47px;
							text-align: center;
							line-height: 48px;
							cursor: pointer;
						}

						.cur {
							border-bottom: 2px solid @ft1-color;
						}
					}

					.new {
						padding: 0px 10px;

						.new_list {
							height: 50px;
							border-bottom: 1px dashed #ccc;
							font-size: 16px;
							color: @ft1-color;
							line-height: 50px;
							padding: 0px 10px;

							.author {
								color: @ft2-color;
								font-size: 15px;
							}
						}

						.paging {
							height: 65px;
							display: flex;
							justify-content: flex-end;
							align-items: center;
						}
					}

					.hot {
						padding: 0px 10px;
						.new_list {
							height: 50px;
							border-bottom: 1px dashed #ccc;
							font-size: 16px;
							color: @ft1-color;
							line-height: 50px;
							padding: 0px 10px;

							.author {
								color: @ft2-color;
								font-size: 15px;
							}
						}
						.paging {
							height: 65px;
							display: flex;
							justify-content: flex-end;
							align-items: center;
						}
					}
				}
			}
		}
	}
</style>
