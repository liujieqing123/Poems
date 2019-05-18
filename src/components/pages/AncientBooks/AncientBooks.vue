<template>
	<div class="ancient_books">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="main_content">
					<div class="tab">
						<div class="tab_item" @click="curId=0;bcate_id=1;getListData()" :class="{'cur':curId === 0}">全部</div>
						<div class="tab_item" @click="selectType(typeItem,type_index)" :class="{'cur':curId === type_index*1+1}" v-for='(typeItem,type_index) in typeData' :key='type_index'>{{typeItem.bcate_name}}</div>
					</div>
					<div class="all_poetry">
						<div class="book_content">
							<div class="book_list" v-for='(listItem,list_index) in ListData' :key='list_index'>
								<div class="list_item" @click="ToDetail(listItem.id)">
									<div class="list_picture">
										<img :src="listItem.image" />
									</div>
									<div class="list_intr">
										<div class="book_name">{{listItem.title}}</div>
										<div class="book_intr">{{listItem.book_resume}}</div>
									</div>
								</div>
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
		name: 'AncientBooks',
		components: {
			Header,Footer
		},
		data() {
			return {
				curId: 0,
				typeData:[],
				ListData: [],
				bcate_id: 1,
				// 分页数
				total_index: 10,
				page_index: 1
			}
		},
		created() {
			this.getListData();
			this.getTypeData()
		},
		methods: {
			ToDetail(id){
				this.$router.push({
          path: '/AncientDetail',
          query: {
            id: id
          }
        })
			},
			// 获取类目列表
			getTypeData() {
				this.$axios({
					url:apiUrl.OldBookCate_url,
				}).then((res) => {
					if(res.code == 1) {
						this.typeData = res.data;
					}
				})
			},
			// 获取古籍列表
			getListData() {
				this.$axios({
					url:apiUrl.oldBookList_url,
					params: {
						bcate_id:this.bcate_id,
						page:this.page_index
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
			// 点击某一页
			current:function(page) {
				this.page_index =page;
				this.getListData()
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
										display: -webkit-box;
										-webkit-box-orient: vertical;
										-webkit-line-clamp: 6;
										overflow: hidden;
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
