<template>
	<div class="header">
		<div class="header_item">
			<div class="container">
				<div class="header_left">
					<div class="logo" @click="ToMy">
						<img src="../../../static/images/20190511115718.png" />
					</div>
					<ul>
						<li @click="ToHome">首页</li>
						<li @click="ToPoetry">诗词</li>
						<li @click="ToAncient">古籍</li>
						<li @click="ToSentence">句子</li>
						<li @click="ToAuthor">作者</li>
					</ul>
					<div class="search">
						<input placeholder="搜索" />
						<i class="iconfont icon-sousuo"></i>
					</div>
				</div>
				<div class="header_rigth">
					<button @click="ToLogin" v-if='login_but_show'>登录</button>
					<button class='but' @click="ToLogin" v-else>{{username}}</button>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
	  name: 'Header',
	  components:{
			
	  },
	  data () {
	    return {
				name:'header',
				login_but_show: true,
				username: ''
	    }
		},
		created() {

		},
		mounted() {
			this.username = sessionStorage.getItem('username');

			if(this.username) {
				this.login_but_show = false;
			}else {
				this.login_but_show = true;
			}
		},         
	  methods:{
		  ToHome(){
			  this.$router.push('/Home')
		  },
		  ToPoetry(){
			  this.$router.push('/Poetry')
		  },
		  ToLogin(){
			  this.$router.push('/Login')
		  },
		  ToAncient(){
			  this.$router.push('/AncientBooks')
		  },
		  ToSentence(){
			  this.$router.push('/Sentence')
		  },
		  ToAuthor(){
			  this.$router.push('/Author')
		  },
		  ToMy(){
			  this.$router.push('/My')
		  }
	  }
	  
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';
	.header{
		height: 53px;
		.header_item{
			width: 100%;
			height: 52px;
			border: 1px solid #ccc;
			position: fixed;
			background: #fff;
			z-index: 99;
			.container{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.header_left{
					display: flex;
					justify-content: flex-start;
					align-items: center;
					.logo{
						width: 80px;
						height: 100%;
						img{
							width: 80px;
							height: 100%;
						}
					}
					ul{
						display: flex;
						justify-content: flex-start;
						height: 30px;
						padding: 0px 30px 0px 30px;
						li{
							font-size: 16px;
							width: 65px;
							height: 30px;
							color: #8590a6;
							text-align: center;
							line-height: 30px;
							cursor: pointer;
						}
						li:hover{
							color: @ft1-color;
						}
					}
					.search{
						width: 240px;
						height: 32px;
						border: 1px solid #ccc;
						border-radius: 4px;
						display: flex;
						justify-content: space-around;
						align-items: center;
						input{
							width: 180px;
							height: 25px;
						}
						.iconfont{
							width: 16px;
							height: 16px;
							color: #ccc;
							font-size: 16px;
							cursor: pointer;
						}
					}
					.search:hover{
						border: 1px solid @ft1-color;
					}
				}
				.header_rigth{
					button{
						width: 64px;
						height: 32px;
						background: @bg-color;
						color: #fff;
						font-size: 14px;
						letter-spacing: 5px;
						border-radius: 5px;
						text-align: center;
						line-height: 32px;
						cursor: pointer;
					}
					.but {
						background: rgba(0,0,0,0);
						color: #333;
						border-bottom: 1px solid #eee;
						border-radius: 0;
					}
				}
				
			}
		}
	}
</style>
