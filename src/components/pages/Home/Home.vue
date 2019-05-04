<template>
	<div class="home">
		<Header></Header>
		<HomeBanner></HomeBanner>
		<div class="main">
			<div class="container">
				<div class="classic_poetry">
					<div class="poetry_header">
						<div class="poetry_title">精品诗词</div>
						<div class="more">
							<span>更多</span>
							<i class="iconfont icon-jiantou_yemian_xiangyou_o"></i>
						</div>
					</div>
					<div class="poetry_main">
						<div class="poetry_li" @click="ToDetail">
							<div class="poetry_picture">
								<img src="/static/images/CFK6dpbXXhKpchDq9sX9ifAJ8gEmQmFzsGMU8CZY.jpeg" />
							</div>
							<div class="poetry_content">
								<div class="content_title">月儿的歌谣</div>
								<div class="ntro">金数据，晋级赛阿数据，术的晋级赛晋级赛阿的数据的方式技，术的晋级赛阿的，减肥的是的减肥的，减肥司法局的奋斗萨芬的发的</div>
								<div class="author">作者：暮紫如烟</div>
							</div>
						</div>
						<div class="poetry_li">
						</div>
						<div class="poetry_li">
						</div>
						<div class="poetry_li">
						</div>
						<div class="poetry_li">
						</div>
						<div class="poetry_li">
						</div>
					</div>
				</div>
				<div class="collected_works">
					<div class="works_header">
						<div class="works_title">推荐古籍</div>
						<div class="more">
							<span>更多</span>
							<i class="iconfont icon-jiantou_yemian_xiangyou_o"></i>
						</div>
					</div>
					<div class="works_main">
						<div class="works_li">
							<div class="works_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="works_content">苍苍蒹葭</div>
						</div>
						<div class="works_li">
							<div class="works_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="works_content">苍苍蒹葭</div>
						</div>
						<div class="works_li">
							<div class="works_picture">
								<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
							</div>
							<div class="works_content">苍苍蒹葭</div>
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
						<div class="works_li">	
						</div>
					</div>
				</div>
				<div class="special">
					<div class="special_li">
						<span>专题</span>
						<img src="../../../../static/images/4d1c32962f1a22550f25d13c10948b26.jpg" />
					</div>
					<div class="special_li">
						<span>专题</span>
						<img src="../../../../static/images/1b89b633dc046dd313b45801a00d40a6.jpg" />
					</div>
					<div class="special_li">
						<span>专题</span>
						<img src="../../../../static/images/b24aba21008f19d6993e924b923a21c2.png" />
					</div>
				</div>
				<div class="new_hot">
					<div class="new_poetry">
						<div class="newpoetry_header">
							<div class="newpoetry_title">最新诗词</div>
							<div class="more">
								<span>更多</span>
								<i class="iconfont icon-jiantou_yemian_xiangyou_o"></i>
							</div>
						</div>
						<div class="newpoetry_main">
							<div class="newpoetry_left">
								<div class="newpoetry_content">
									<span>[诗词]</span>&nbsp;
									<div>那一世，为你抚琴</div>&nbsp;
									<span>-离陌</span>
								</div>
								<div class="newpoetry_content">
									<span>[诗词]</span>&nbsp;
									<div>那一世，为你抚琴</div>&nbsp;
									<span>-离陌</span>
								</div>
							</div>
							<div class="newpoetry_rigth">
								<div class="newpoetry_content">
									<span>[诗词]</span>&nbsp;
									<div>那一世，为你抚琴</div>&nbsp;
									<span>-离陌</span>
								</div>
								<div class="newpoetry_content">
									<span>[诗词]</span>&nbsp;
									<div>那一世，为你抚琴</div>&nbsp;
									<span>-离陌</span>
								</div>
							</div>
						</div>
					</div>
					<div class="hot_poetry">
						<div class="hotpoetry_header">
							<div class="hotpoetry_title">热门诗词</div>
						</div>
						<div class="hotpoetry_main">
							<div class="hotpoetry_content">
								<span>1.</span>&nbsp;
								<div>那一世，为你抚琴</div>&nbsp;
								<span>-离陌</span>
							</div>
						</div>
					</div>
				</div>
				<div class="sentence">
					<img src="../../../../static/images/950235a1bd6aac9366430c4f310f1f86.jpg" />
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '../../commons/Header';
	import Footer from '../../commons/Footer';
	import HomeBanner from '../../commons/HomeBanner';
	export default {
	  name: 'Home',
	  components:{
			Header,Footer,HomeBanner
	  },
	  data () {
	    return {
	      name:'Home'
	    }
	  },
	  methods:{
		  ToDetail(){
			  this.$router.push('/DetailsPoetry')
		  }
	  }
	  
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';	
	.home{
		.main{
			width: 100%;
			// height: 1000px;
// 			background-image: url('/static/images/mainbg.jpg');
// 			background-repeat: no-repeat;
// 			background-size: 100% 100%;
			background: #f3f3f3;
			border-top: 1px solid #ccc;
			padding: 20px 0px 40px 0px;
			.container{
				.classic_poetry{
					padding: 10px 10px 20px 10px;
					background: #fff;
					box-shadow:0 0 4px #ddd;
					.poetry_header{
						height: 37px;
						border-bottom: 1px solid #ccc;
						display: flex;
						justify-content: space-between;
						.poetry_title{
							font-size: 15px;
							color: @ft1-color;
						}
						.more{
							font-size: 12px;
							color: @ft2-color;
							cursor: pointer;
						}
						.more:hover{
							color: @ft1-color;
						}
					}
					.poetry_main{
						padding: 10px 10px 0px 10px;
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						.poetry_li{
							width: 340px;
							height: 120px;
							border: 1px solid #ccc;
							padding: 10px 0px 10px 10px;
							display: flex;
							justify-content: space-between;
							.poetry_picture{
								width: 90px;
								height: 120px;
								cursor: pointer;
								img{
									width: 90px;
									height: 120px;
								}
							}
							.poetry_content{
								width: 240px;
								height: 123px;
								.content_title{
									font-size: 16px;
									color: @ft1-color;
									cursor: pointer;
								}
								.ntro{
									height: 70px;
									padding-bottom: 9px;
									font-size: 13px;
									color: @ft2-color;
// 									overflow: hidden;
// 									text-overflow: ellipsis;
// 									white-space: pre-wrap;
// 									word-wrap: break-word;
// 									word-break: normal;

								}
								.author{
									font-size: 15px;
									color: @ft1-color;
									cursor: pointer;
								}
							}
						}
					}
				}
				.collected_works{
					padding: 10px 10px 20px 10px;
					background: #fff;
					box-shadow:0 0 4px #ddd;
					margin-top: 20px;
					.works_header{
						height: 37px;
						border-bottom: 1px solid #ccc;
						display: flex;
						justify-content: space-between;
						.works_title{
							font-size: 15px;
							color: @ft1-color;
						}
						.more{
							font-size: 12px;
							color: @ft2-color;
							cursor: pointer;
						}
						.more:hover{
							color: @ft1-color;
						}
					}
					.works_main{
						padding-top: 10px;
						display: flex;
						justify-content: flex-start;
						flex-wrap: wrap;
						.works_li{
							width: 153px;
							height: 202px;
							padding: 0px 20px 0px 20px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							.works_picture{
								width: 120px;
								height: 160px;
								img{
									width: 120px;
									height: 160px;
									cursor: pointer;
								}
								img:hover{
									width: 130px;
									height: 170px;
									transition:1s; 
								}
							}
							.works_content{
								width: 100%;
								font-size: 14px;
								color: @ft1-color;
								text-align: center;
								background: #fff;
								cursor: pointer;
								z-index: 999;
							}
						}
					}
				}
				.special{
					height: 171px;
					display: flex;
					justify-content: space-between;
					margin-top: 20px;
					.special_li{
						width: 364px;
						height: 171px;
						position: relative;
						span{
							display: inline-block;
							width: 44px;
							height: 26px;
							background: #f2711c;
							color: #fff;
							font-size: 14px;
							text-align: center;
							line-height: 26px;
							border-radius: 4px;
							position: absolute;
							top: 0px;
							left: 0px;
						}
						img{
							width: 364px;
							height: 171px;
						}
					}
				}
				.new_hot{
					margin-top: 20px;
					display: flex;
					justify-content: space-between;
					.new_poetry{
						width: 744px;
						// height: 200px;
						background: #fff;
						box-shadow:0 0 4px #ddd;
						padding: 10px 10px 20px 10px;
						.newpoetry_header{
							height: 35px;
							border-bottom: 1px solid #ccc;
							display: flex;
							justify-content: space-between;
							.newpoetry_title{
								font-size: 15px;
								color: @ft1-color;
							}
							.more{
								font-size: 12px;
								color: @ft2-color;
								cursor: pointer;
							}
							.more:hover{
								color: @ft1-color;
							}
						}
						.newpoetry_main{
							padding: 10px 10px 0px 10px;
							display: flex;
							justify-content: space-between;
							.newpoetry_left{
								width: 344px;
								height: 200px;
							}
							.newpoetry_rigth{
								width: 344px;
								height: 200px;
							}
							.newpoetry_content{
								width: 100%;
								height: 32px;
								display: flex;
								justify-content: flex-start;
								align-items: center;
								span{
									font-size: 15px;
									color: @ft2-color;
									cursor: pointer;
								}
								div{
									font-size: 15px;
									color: @ft1-color;
									cursor: pointer;
								}
							}
						}
					}
					.hot_poetry{
						width: 344px;
						height: 200px;
						background: #fff;
						box-shadow:0 0 4px #ddd;
						padding: 10px 10px 0px 10px;
						.hotpoetry_header{
							height: 35px;
							border-bottom: 1px solid #ccc;
							.hotpoetry_title{
								font-size: 15px;
								color: @ft1-color;
							}
						}
						.hotpoetry_main{
							padding: 10px 10px 0px 10px;
							.hotpoetry_content{
								width: 100%;
								height: 32px;
								display: flex;
								justify-content: flex-start;
								align-items: center;
								span{
									font-size: 15px;
									color: @ft2-color;
									cursor: pointer;
								}
								div{
									font-size: 15px;
									color: @ft1-color;
									cursor: pointer;
								}
							}
						}
					}
				}
				.sentence{
					width: 100%;
					height: 233px;
					margin-top: 30px;
					img{
						width: 100%;
						height: 233px;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
