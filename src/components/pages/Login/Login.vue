<template>
	<div class="login">
		<div class="content">
			<div class="title">
				<div class="logo">
					<img src="../../../../static/images/20190511115803.png" />
				</div>
			</div>
			<div class="item">
				<div class="item_title">使用邮箱登录：</div>
				<ul>
					<li>
						<span class="iconfont icon-youxiang"></span>
						<input type='text' placeholder="输入您的邮箱" maxlength="11" v-model='email' @blur='verifyNum'/>
					</li>
					<li>
						<span class="iconfont icon-mima54"></span>
						<input type="password" placeholder="输入您的密码" v-model='pwd' maxlength="18"/>
					</li>
				</ul>
				<div class="ForgetPassword">忘记密码？</div>
				<div class="login_reg">
					<button @click='login'>登录</button>
					<span @click="ToReg">新用户注册</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import apiUrl from '../../../api/api'

	export default {
	  name: 'Login',
	  components:{
			
	  },
	  data () {
	    return {
				name:'login',
				email: '123@163.com',
				pwd: '123456'
	    }
	  },
	  methods:{
			// 点击登录
			login() {
				if(this.email == '' || this.pwd == '') {
					this.$message.error('请填写登录账号/密码');
					return
				}
				this.$axios({
					method:'post',
					url: apiUrl.login_url,
					data:{
						email: this.email,
						password: this.pwd
					}
				}).then((res) => {
					if(res.code == 1) {
						sessionStorage.setItem('user_id',res.data.user_id);
						sessionStorage.setItem('username',res.data.username);
						this.$message.success('登录成功');
						this.$router.replace('./Home');
					}
					
				})
			},
			// 验证手机号
			verifyNum() {
				let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
				if(!(re.test(this.email))) {
					this.$message.error('请输入正确的邮箱');
				}
			},
		  ToReg(){
			  this.$router.push('./Reg')
		  }
	  }
	  
	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';
	.login{
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
							height: 26px;
						}
					}
					li:hover{
						border: 1px solid @ft1-color;
					}
				}
				.ForgetPassword{
					color: #1890ff;
					font-size: 14px;
					text-align: end;
					cursor: pointer;
				}
				.login_reg{
					margin-top: 30px;
					button{
						width: 64px;
						height: 32px;
						border-radius: 4px;
						background: @bg-color;
						color: #fff;
						letter-spacing: 4px;
						cursor: pointer;
					}
					span{
						display: inline-block;
						color: #1890ff;
						font-size: 14px;
						height: 16px;
						width: 80px;
						border-left: 1px solid #ccc;
						text-align: end;
						line-height: 16px;
						margin-left: 10px;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
