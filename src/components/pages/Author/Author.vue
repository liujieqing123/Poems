<template>
	<div class=" author">
		<Header></Header>
		<div class="banner_item">
			<div class="banner_title">
				<div class="poet">诗人.词人</div>
				<div class="poet_praise">古墨轻磨满几香，砚池新浴灿生光、或劲键或婉转，或如婀娜窈窕的美人，或如矫健勇猛的壮士，或如春风拂面繁花一片，或如北风入关深沉冷峻。</div>
			</div>
			<Banner></Banner>
		</div>
		<div class="main">
			<div class="container">
				<div class="main_content">
					<div class="tab">
						<div class="tab_item" @click="curId=0" :class="{'cur':curId === 0}">全部</div>
						<div class="tab_item" @click="curId=1" :class="{'cur':curId === 1}">唐代</div>
						<div class="tab_item" @click="curId=2" :class="{'cur':curId === 2}">宋代</div>
						<div class="tab_item" @click="curId=3" :class="{'cur':curId === 3}">明代</div>
						<div class="tab_item" @click="curId=4" :class="{'cur':curId === 4}">元代</div>
						<div class="tab_item" @click="curId=5" :class="{'cur':curId === 5}">清代</div>
						<div class="tab_item" @click="curId=6" :class="{'cur':curId === 6}">现代</div>
					</div>
					<div class="all_poetry" v-if="curId === 0">
						<div class="poetry_list">
							<div class="poetry_picture">
								<img src="../../../../static/images/libai.jpg" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
								<div class="poetry_title">李白</div>
								<div class="poetry_intro">李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。</div>
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
	import Banner from '../../commons/Banner.vue'
	export default {
		name: 'Author',
		components: {
			Header,Footer,Banner
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
	.author{
		.banner_item{
			height: 380px;
			border-bottom: 1px solid #ccc;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0px 200px;
			background: #f3f3f3;
			.banner_title{
				width: 410px;
				height: 340px;
				display: flex;
				justify-content: flex-start;
				padding-left: 30px;
				.poet{
					width: 40px;
					height: 150px;
					border: 3px solid rgb(168, 5, 5);
					-webkit-writing-mode: vertical-rl;
					writing-mode: vertical-rl;
					text-align: center;
					line-height: 40px;
					font-weight: 600;
					letter-spacing: 7px;
					margin-right: 20px;
					color: #e50012;
				}
				.poet_praise{
					-webkit-writing-mode: vertical-lr;
					writing-mode: vertical-lr;
					line-height: 30px;
				}
			}
		}
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
								font-size: 18px;
								color: @ft1-color;
								padding-bottom: 8px;
								font-weight: 600;
								cursor: pointer;
							}
							.poetry_intro{
								font-size: 14px;
								padding: 5px 0;
								line-height: 25px;
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
