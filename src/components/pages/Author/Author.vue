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
						<div class="tab_item" @click="select(preiodCateItem_index,preiodCateItem.id)" :class="{'cur':curId == preiodCateItem_index}" v-for='(preiodCateItem,preiodCateItem_index) in preiodCate' :key='preiodCateItem_index'>{{preiodCateItem.pcate_name}}</div>
					</div>
					<div class="all_poetry">
						<div class="poetry_list" v-for='(listItem,index) in Author_list' :key='index'>
							<div class="poetry_picture">
								<img :src="listItem.image" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">{{listItem.author}}</div>
								<div class="poetry_intro">{{listItem.description}}</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" 
							:total="page_index"
							@current-change='current' >
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

	import apiUrl from '../../../api/api'

	export default {
		name: 'Author',
		components: {
			Header,Footer,Banner
		},
		data() {
			return {
				curId: 0,
				Author_list: [],
				// 分页数
				page_index:10,
				// 朝代
				pcate_id: 1,
				preiodCate:[],
				// 请求页数
				page_num: 1,
			}
		},
		created() {
			this.getAuthorList();
			this.getPreiodCate();
		},
		methods: {
			// 获取朝代
			getPreiodCate() {
				this.$axios({
					url:apiUrl.preiodCate_url
				}).then((res) => {
					if(res.code == 1) {
						this.preiodCate = res.data;
					}
				})
			},
			// 获取作者列表
			getAuthorList() {
				this.$axios({
					url:apiUrl.authors_url,
					params: {
						pcate_id: this.pcate_id,
						page: this.page_num
					}
				}).then((res) => {
					if(res.code == 1) {
						this.Author_list = res.data.data;
						this.page_index = res.data.page*10;
					}
				})
			},
			select(index,id) {
				this.curId = index;
				this.pcate_id = id;
				this.pcate_id = id;
				this.getAuthorList();
			},
			// 点击某一页
			current:function(page) {
				this.page_num = page;
				this.getAuthorList()
			}
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
