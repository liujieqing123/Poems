<template>
	<div class="share_sentence">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="share_item">
					<div class="share_title">
						<span class="iconfont icon-bianji"></span>
						<span>分享句子</span>
					</div>
					<div class="sentence_content">句子内容</div>
					<el-input type="textarea" :rows="2" placeholder="这里输入您要分享的句子内容" v-model="textarea">
					</el-input>
					<div class="share">分享</div>
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
		name: 'ShareSentence',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				textarea: ''

			}
		},
		methods: {

		}

	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';

	.share_sentence {
		.main {
			background: #f3f3f3;
			padding: 20px 0;

			.container {
				.share_item {
					width: 844px;
					height: 315px;
					border: 1px solid #ccc;
					box-shadow: 0 0 4px #ddd;
					background: #fff;
					padding: 10px 10px;

					.share_title {
						height: 25px;
						border-bottom: 1px solid #ccc;
						font-size: 14px;
						color: @ft1-color;

					}
					.sentence_content {
						font-size: 14px;
						font-weight: 600;
						height: 30px;
						margin-top: 20px;
					}
					.share{
						width: 56px;
						height: 30px;
						border: 2px solid @ft1-color;
						color: @ft1-color;
						font-size: 14px;
						text-align: center;
						line-height: 30px;
						margin-top: 30px;
						cursor: pointer;
					}
				}
			}

		}
	}
</style>
