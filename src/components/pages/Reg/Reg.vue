<template>
	<div class="reg">
		<div class="content">
			<div class="title">
				<div class="logo">
					<img src="../../../../static/images/ruogu_logo.png" />
				</div>
			</div>
			<div class="item">
				<div class="item_title">注册新的账号：</div>
				<ul>
					<li>
						<span class="iconfont icon-youxiang"></span>
						<input placeholder="输入您的手机号" />
					</li>
					<li>
						<span class="iconfont icon-yonghu1"></span>
						<input type="password" placeholder="输入您要注册的用户名" />
					</li>
					<li>
						<span class="iconfont icon-mima54"></span>
						<input type="password" placeholder="输入您要注册的密码" />
					</li>
				</ul>
				<div class="reg_btn">
					<button>注册</button>
					<div class="tologin" @click="ToLogin">已有账号？切换到登录</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Login',
	  components:{
			
	  },
	  data () {
	    return {
	      name:'login'
	    }
	  },
	  methods:{
		  ToLogin(){
			  this.$router.push('./Login')
		  }
	  }
	  
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.reg{
		width: 100%;
		height: 100%;
		.content{
			width: 528px;
			height: 495px;
			border: 1px solid #ccc;
			margin: 80px auto;
			.title{
				width: 100%;
				height: 83px;
				border-bottom: 1px solid #ccc;
				display: flex;
				justify-content: center;
				align-items: center;
				.logo{
					width: 80px;
					height: 50px;
					img{
						width: 80px;
						height: 50px;
					}
				}
			}
			.item{
				padding: 24px;
				.item_title{
					height: 39px;
					font-size: 14px;
					line-height: 39px;
					margin-bottom: 5px;
				}
				ul{
					li{
						height: 32px;
						border: 1px solid #ccc;
						border-radius: 4px;
						margin-bottom: 30px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding-left: 10px;
						span{
							width: 17px;
							height: 17px;
							font-size: 17px;
							color: #ccc;
						}
						input{
							width: 445px;
							height: 28px;
						}
					}
					li:hover{
						border: 1px solid @ft1-color;
					}
				}
				.reg_btn{
					margin-top: 30px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					button{
						width: 64px;
						height: 32px;
						border-radius: 4px;
						background: @bg-color;
						color: #fff;
						letter-spacing: 4px;
						cursor: pointer;
					}
					.tologin{
						color: #1890ff;
						font-size: 14px;
						text-align: end;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
