<template>
	<div class="details_poetry">
		<Header></Header>
		<div class="main">
			<div class="container">
				<div class="poetry_item">
					<h1>江南曲</h1>
					<div class="basic_info">
						<span>作者：李白</span>
						<span>朝代：唐代</span>
						<span class="last">分类：唐诗</span>
					</div>
					<div class="poetry_content">
						<div class="poetry_article">
							一
							</br>
							思春望枝头，春来却无声。燕子双双飞，相语望归程。
							</br>
							垂柳丝一把，袅袅如烟雾。雾里望归程，曾是江南处。
							</br>
							风吻花蕾绽，花粉随风散。花粉醉心扉，蝶儿多浪漫。
							</br>
							二
							</br>
							春催花似火，雨洗叶如油。点点成诗句，写入旧时书。
							</br>
							故里梦江南，一路芬芳意。花瓣随风散，又与蝶儿戏。
							</br>
							风卷如轻纱，碎珠尽飞洒。水天一色长，天边飞虹挂。
							</br>
							三
							</br>
							飞花落水中，随水悠悠荡。划破飞虹纱，梦里归程望。
							</br>
							花蕾含苞看，蝶儿飞来恋。花蕾更羞涩，轻轻风中绽。
							</br>
							又是江南笛，一首思念曲。燕尾双裁过，水波伴低舞。
						</div>
						<div class="poetry_picture">
							<img src="../../../../static/images/70752dbax78519d012f5a&690.jpg" />
							<img src="../../../../static/images/20180820_8d83670f6128a6bf4b2fdc6155c181e1_wmk.jpeg" />
						</div>
					</div>
				</div>
				<div class="poetry_rigth">
					<div class="poetry_author">
						<div class="head_portrait">
							<img src="../../../../static/images/libai.jpg" />
						</div>
						<div class="name">李白</div>
						<div class="sign">技冠群雄</div>
					</div>
					<button @click="ToMy">写新诗词</button>
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
		name: 'DetailsPoetry',
		components: {
			Header,Footer
		},
		data() {
			return {
				
	
			}
		},
		methods: {
			ToMy(){
				this.$router.push('/My')
			}
		}
	
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.details_poetry{
		.main{
			background: #f3f3f3;
			padding: 20px 0px;
			.container{
				display: flex;
				justify-content: space-between;
				.poetry_item{
					width: 900px;
					border: 1px solid #ccc;
					box-shadow: 0 0 4px #ddd;
					background: #fff;
					h1{
						width: 100%;
						height: 76px;
						font-size: 25px;
						text-align: center;
						line-height: 76px;
						color: black;
					}
					.basic_info{
						width: 100%;
						height: 30px;
						background: #f5f5f5;
						display: flex;
						justify-content: center;
						align-items: center;
						span{
							padding: 0px 20px;
							color: #999;
							font-size: 13px;
							border-right: 1px solid #999;
						}
						.last{
							border-right: none;
						}
					}
					.poetry_content{
						padding: 20px 20px;
						.poetry_article{
							padding-bottom: 20px;
							font-size: 15px;
							line-height: 30px;
						}
						.poetry_picture{
							max-width: 800px;
							img{
								max-width: 800px;
								margin-top: 20px;
							}
						}
					}
				}
				.poetry_rigth{
					background: #fff;
					height: 310px;
					display: flex;
					flex-direction: column;
					align-items: center;
					border: 1px solid #ccc;
					box-shadow: 0 0 4px #ddd;
					.poetry_author{
						width: 244px;
						height: 240px;
						background-image: url('../../../../static/images/u=3889215982,1184701029&fm=214&gp=0.jpg');
						background-repeat: no-repeat;
						background-size: 100% 100%;
						display: flex;
						justify-content: center;
						flex-direction: column;
						align-items: center;
						.head_portrait{
							width: 80px;
							height: 80px;
							border-radius: 50%;
							img{
								width: 80px;
								height: 80px;
								border-radius: 50%;
							}
						}
						.name{
							font-size: 17px;
							color: @ft1-color;
							font-weight: 600;
							margin-top: 20px;
						}
						.sign{
							width: 66px;
							height: 26px;
							color: #fff;
							font-size: 13px;
							background-color: rgb(88, 207, 179);
							text-align: center;
							line-height: 26px;
							border-radius: 4px;
							margin-top: 20px;
						}
					}
					button{
						width: 220px;
						height: 32px;
						background: #00b5ad;
						color: #fff;
						border-radius: 5px;
						margin-top: 20px;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
