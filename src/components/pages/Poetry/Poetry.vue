<template>
	<div class="poetry">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="main_content">
					<div class="tab">
						<div class="tab_item" @click="curId=0" :class="{'cur':curId === 0}">全部</div>
						<div class="tab_item" @click="curId=1" :class="{'cur':curId === 1}">推荐</div>
						<div class="tab_item" @click="curId=2" :class="{'cur':curId === 2}">唐诗</div>
						<div class="tab_item" @click="curId=3" :class="{'cur':curId === 3}">宋词</div>
						<div class="tab_item" @click="curId=4" :class="{'cur':curId === 4}">元曲</div>
						<div class="tab_item" @click="curId=5" :class="{'cur':curId === 5}">诗经</div>
						<div class="tab_item" @click="curId=6" :class="{'cur':curId === 6}">现代诗文</div>
					</div>
					<div class="all_poetry" v-if="curId === 0">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/4a224b4140adbd819acc5cd20d9aedaf.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="recommend_poetry" v-if="curId === 1">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="poetry_dynasty" v-if="curId === 2">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/4a224b4140adbd819acc5cd20d9aedaf.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="song_poems" v-if="curId === 3">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="yuan_works" v-if="curId === 4">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/4a224b4140adbd819acc5cd20d9aedaf.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="book_songs" v-if="curId === 5">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" :total="1000">
							</el-pagination>
						</div>
					</div>
					<div class="book_songs" v-if="curId === 6">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">水调歌头</div>
								<div class="poetry_intro">水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头水调歌头</div>
								<div class="poetry_author">作者：杜甫</div>
							</div>
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
				curId:0
	
			}
		},
		methods: {
	
		}
	
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.poetry{
		.main{
			width: 100%;
			background: #f3f3f3;
			padding:20px 0;
			.container{
				.main_content{
					width: 824px;
					// height: 700px;
					background: #fff;
					border: 1px solid #ccc;
					box-shadow: 0 0 4px #ddd;
					padding: 0px 20px;
					.tab{
						width: 824px;
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
					.poetry_list{
						width: 804px;
						height: 119px;
						border-bottom: 1px dashed #ccc;
						padding: 20px 10px;
						display: flex;
						justify-content: space-between;
						.poetry_picture{
							width: 90px;
							height: 120px;
							img{
								width: 90px;
								height: 120px;
								cursor: pointer;
							}
						}
						.poetry_content{
							width: 700px;
							height: 120px;
							.poetry_title{
								font-size: 16px;
								color: @ft1-color;
								padding-bottom: 10px;
							}
							.poetry_intro{
								font-size: 14px;
								padding: 5px 0;
								cursor: pointer;
							}
							.poetry_author{
								font-size: 13px;
								color: @ft2-color;
								padding-top: 10px;
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
