<template>
	<div class="ancient_detail">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="ancient_books">
					<div class="book_picture">
						<img src="../../../../static/images/CFK6dpbXXhKpchDq9sX9ifAJ8gEmQmFzsGMU8CZY.jpeg" />
					</div>
					<div class="book_content">
						<div class="book_name">论语</div>
						<div class="book_author">共14篇文章&nbsp;&nbsp;&nbsp;&nbsp;创建人：孔子及其弟子</div>
						<div class="sentence">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。</div>
					</div>
				</div>
				<div class="book_main">
					<div class="article_list">
						<div class="list_item">
							<div class="number">1</div>
							<div class="list_content">
								<div class="postname">学而篇</div>
								<div class="intro">子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”</div>
								<div class="author">作者：孔子及其弟子</div>
							</div>
						</div>
					</div>
					<div class="book_sort">
						<div class="sort_title">古籍分类</div>
						<div class="sort_item">经部</div>
						<div class="adve">最优秀的古诗词文化社区</div>
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
		name: 'AncientDetail',
		components: {
			Header,Footer
		},
		data() {
			return {
				
	
			}
		},
		methods: {
	
		}
	
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.ancient_detail{
		.main{
			width: 100%;
			background: #f3f3f3;
			.container{
				padding: 20px 0;
				.ancient_books{
					height: 160px;
					background: #fff;
					border: 1px solid #ccc;
					box-shadow: 0 0 4px #ddd;
					display: flex;
					justify-content: flex-start;
					.book_picture{
						width: 120px;
						height: 160px;
						img{
							width: 120px;
							height: 160px;
						}
					}
					.book_content{
						margin-left: 20px;
						display: flex;
						justify-content: space-around;
						flex-direction: column;
						.book_name{
							font-size: 20px;
							color: @ft1-color;
							font-weight: 600;
						}
						.book_author{
							font-size: 16px;
							color: @ft2-color;
						}
						.sentence{
							font-size: 16px;
						}
					}
				}
				.book_main{
					display: flex;
					justify-content: space-between;
					margin-top: 40px;
					.article_list{
						width: 864px;
						height: 400px;
						border: 1px solid #ccc;
						box-shadow: 0 0 4px #ddd;
						background: #fff;
						.list_item{
							width: 844px;
							border-bottom: 1px dashed #ccc;
							padding: 10px 10px;
							display: flex;
							justify-content: flex-start;
							.number{
								width: 32px;
								height: 32px;
								background: #cc7030;
								border-radius: 50%;
								text-align: center;
								line-height: 32px;
								color: #fff;
							}
						}
						.list_content{
							margin-left: 20px;
							line-height: 35px;
							.postname{
								font-size: 17px;
								color: @ft1-color;
								cursor: pointer;
							}
							.intro{
								font-size: 14px;
							}
							.author{
								font-size: 14px;
								color: @ft1-color;
							}
						}
					}
					.book_sort{
						width: 244px;
						height: 194px;
						border: 1px solid #ccc;
						box-shadow: 0 0 4px #ddd;
						background: #fff;
						padding: 10px 10px;
						.sort_title{
							height: 30px;
							font-size: 15px;
							color: @ft1-color;
							border-bottom: 1px solid #ccc;
						}
						.sort_item{
							height: 35px;
							font-size: 15px;
							color: @ft2-color;
							line-height: 35px;
							cursor: pointer;
						}
						.adve{
							height: 35px;
							font-size: 15px;
							color: @ft1-color;
							border-top: 1px solid #ccc;
							margin-top: 30px;
							line-height: 35px;
						}
					}
				}
			}
		}
	}
</style>
