<template>
	<div class="header">
		<div class="container">
			<div class="header_left">
				<div class="logo">
					<img src="../../../static/images/ruogu_logo.png" />
				</div>
				<ul>
					<li>首页</li>
					<li>文章</li>
					<li>文集</li>
					<li>句子</li>
				</ul>
				<div class="search">
					<input placeholder="搜索" />
					
				</div>
			</div>
			<div class="header_rigth">
				<button @click="ToLogin">登录</button>
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
	      name:'header'
	    }
	  },
	  methods:{
		  ToLogin(){
			  this.$router.push('/Login')
		  }
	  }
	  
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';	
	.header{
		width: 100%;
		height: 52px;
		border: 1px solid #ccc;
		position: fixed;
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
				}
			}
			
		}
	}
</style>
