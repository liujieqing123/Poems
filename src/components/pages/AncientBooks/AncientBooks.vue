<template>
	<div class="ancient_books">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="main_content">
					<div class="tab">
						<div class="tab_item" @click="curId=0" :class="{'cur':curId === 0}">全部</div>
						<div class="tab_item" @click="curId=1" :class="{'cur':curId === 1}">经部</div>
						<div class="tab_item" @click="curId=2" :class="{'cur':curId === 2}">史部</div>
						<div class="tab_item" @click="curId=3" :class="{'cur':curId === 3}">子部</div>
						<div class="tab_item" @click="curId=4" :class="{'cur':curId === 4}">集部</div>
					</div>
					<div class="all_poetry" v-if="curId === 0">
						<div class="book_content">
							<div class="book_list">
								<div class="list_item" @click="ToDetail">
									<div class="list_picture">
										<img src="../../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg" />
									</div>
									<div class="list_intr">
										<div class="book_name">论语</div>
										<div class="book_intr">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。与《大学》《中庸》《孟子》《诗经》《尚书》《礼记》《易经》《春秋》并称“四书五经”。通行本《论语》共二十篇。</div>
									</div>
								</div>
							</div>
							<div class="book_list">
								<div class="list_item">
									<div class="list_picture">
										<img src="../../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg" />
									</div>
									<div class="list_intr">
										<div class="book_name">论语</div>
										<div class="book_intr">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。与《大学》《中庸》《孟子》《诗经》《尚书》《礼记》《易经》《春秋》并称“四书五经”。通行本《论语》共二十篇。</div>
									</div>
								</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="recommend_poetry" v-if="curId === 1">
						<div class="book_content">
							<div class="book_list">
								<div class="list_item">
									<div class="list_picture">
										<img src="../../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg" />
									</div>
									<div class="list_intr">
										<div class="book_name">论语</div>
										<div class="book_intr">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。与《大学》《中庸》《孟子》《诗经》《尚书》《礼记》《易经》《春秋》并称“四书五经”。通行本《论语》共二十篇。</div>
									</div>
								</div>
							</div>
							<div class="book_list">
								<div class="list_item">
									<div class="list_picture">
										<img src="../../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg" />
									</div>
									<div class="list_intr">
										<div class="book_name">论语</div>
										<div class="book_intr">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。与《大学》《中庸》《孟子》《诗经》《尚书》《礼记》《易经》《春秋》并称“四书五经”。通行本《论语》共二十篇。</div>
									</div>
								</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="poetry_dynasty" v-if="curId === 2">
						<div class="book_content">
							<div class="book_list">
								<div class="list_item">
									<div class="list_picture">
										<img src="../../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg" />
									</div>
									<div class="list_intr">
										<div class="book_name">论语</div>
										<div class="book_intr">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。与《大学》《中庸》《孟子》《诗经》《尚书》《礼记》《易经》《春秋》并称“四书五经”。通行本《论语》共二十篇。</div>
									</div>
								</div>
							</div>
							<div class="book_list">
								<div class="list_item">
									<div class="list_picture">
										<img src="../../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg" />
									</div>
									<div class="list_intr">
										<div class="book_name">论语</div>
										<div class="book_intr">《论语》是儒家学派的经典著作之一，由孔子的弟子及其再传弟子编撰而成。它以语录体和对话文体为主，记录了孔子及其弟子言行，集中体现了孔子的政治主张、伦理思想、道德观念及教育原则等。与《大学》《中庸》《孟子》《诗经》《尚书》《礼记》《易经》《春秋》并称“四书五经”。通行本《论语》共二十篇。</div>
									</div>
								</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="song_poems" v-if="curId === 3">
						
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="yuan_works" v-if="curId === 4">
						
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
		name: 'AncientBooks',
		components: {
			Header,Footer
		},
		data() {
			return {
				curId: 0
	
			}
		},
		methods: {
			ToDetail(){
				this.$router.push('/AncientDetail')
			}
		}
	
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.ancient_books{
		.main{
			width: 100%;
			background: #f3f3f3;
			padding:20px 0;
			.container{
				.main_content{
					width: 100%;
					// height: 700px;
					background: #fff;
					border: 1px solid #ccc;
					box-shadow: 0 0 4px #ddd;
					padding: 0px 30px;
					.tab{
						width: 100%;
						height: 48px;
						border-bottom: 1px solid #ccc;
						display: flex;
						justify-content: flex-start;
						.tab_item{
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
					.book_content{
						width: 100%;
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						.book_list{
							width: 553px;
							height: 182px;
							padding: 0px 20px;
							display: flex;
							justify-content: center;
							align-items: center;
							.list_item{
								width: 100%;
								height: 162px;
								background: #f7f7f7;
								border: 1px solid #ccc;
								box-shadow: 0 0 4px #ddd;
								border-radius: 4px;
								display: flex;
								justify-content: space-between;
								padding-right: 5px;
								.list_picture{
									width: 120px;
									height: 162px;
									img{
										width: 120px;
										height: 162px;
										cursor: pointer;
									}
								}
								.list_intr{
									width: 410px;
									height: 162px;
									.book_name{
										font-size: 16px;
										color: @ft1-color;
										font-weight: 600;
										margin-bottom: 10px;
										cursor: pointer;
									}
									.book_intr{
										font-size: 14px;
									}
								}
							}
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
</style>
