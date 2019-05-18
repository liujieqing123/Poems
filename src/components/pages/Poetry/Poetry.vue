<template>
	<div class="poetry">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="main_content">
					<div class="tab">
						<div class="tab_item" @click="curId=0;bcate_id=1;getListData()" :class="{'cur':curId === 0}">全部</div>
						<div class="tab_item" @click="selectType(typeItem,type_index)" :class="{'cur':curId === type_index*1+1}" v-for='(typeItem,type_index) in typeData' :key='type_index'>{{typeItem.pcate_name}}</div>
					</div>
					<div class="all_poetry">
						<div class="poetry_list" v-for='(listItem,list_index) in ListData' :key='list_index' @click='ToDetail(listItem.id)'>
							<div class="poetry_picture">
								<img :src="listItem.image" />
							</div>
							<div class="poetry_content">
								<div class="poetry_title">{{listItem.title}}</div>
								<div class="poetry_intro">{{listItem.description}}</div>
								<div class="poetry_author">作者：{{listItem.author}}</div>
							</div>
						</div>
						<div class="paging">
							<el-pagination background layout="prev, pager, next" 
							:total="total_index"
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

	import apiUrl from '../../../api/api'

	export default {
		name: 'Sentence',
		components: {
			Header,Footer
		},
		data() {
			return {
				curId:0,
				ListData:[],
				total_index: 10,
				typeData:[],
				bcate_id: 1,
				// 请求页数
				page_num: 1,
			}
		},
		created() {
			this.getListData();
			this.getTypeData();
		},
		methods: {
			// 获取类目列表
			getTypeData() {
				this.$axios({
					url:apiUrl.PoemCate_url,
				}).then((res) => {
					if(res.code == 1) {
						this.typeData = res.data;
					}
				})
			},
			// 获取诗词列表
			getListData() {
				this.$axios({
					url:apiUrl.poems_url,
					params: {
						pcate_id:this.bcate_id,
						page:this.page_num
					}
				}).then((res) => {
					if(res.code == 1) {
						this.total_index = res.data.pageTotal*10;
						this.ListData = res.data.data;
					}
				})
			},
			selectType(obj,index) {
				this.bcate_id = obj.id;
				this.curId = index*1+1;
				this.getListData();
			},
			ToDetail(id){
				this.$router.push({
          path: '/DetailsPoetry',
          query: {
            poetryId: id
          }
        })
			},
			// 点击某一页
			current:function(page) {
				this.page_num = page;
				this.getListData()
			}
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
