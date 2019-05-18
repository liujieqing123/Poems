<template>
	<div class="reg">
		<div class="content">
			<div class="title">
				<div class="logo">
					<img src="../../../../static/images/20190511115803.png" />
				</div>
			</div>
			<div class="item">
				<div class="item_title">注册新的账号：</div>
				<ul>
					<li>
						<span class="iconfont icon-youxiang"></span>
						<input type='text' placeholder="请输入邮箱" v-model='email' @blur='verifyNum'/>
					</li>
					<li>
						<span class="iconfont icon-yonghu1"></span>
						<input type="text" placeholder="请输入您的用户名" v-model='name'/>
					</li>
					<li>
						<span class="iconfont icon-mima54"></span>
						<input type="password" placeholder="请输入密码" v-model='pwd'/>
					</li>
					<li>
						<span class="iconfont icon-mima54"></span>
						<input type="password" placeholder="请确认您的密码" v-model='confirm_pwd' @blur='verifyPwd'/>
					</li>
				</ul>
				<div class="reg_btn">
					<button @click='reg'>注册</button>
					<div class="tologin" @click="ToLogin">已有账号？切换到登录</div>
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
				email: '',
				name: '',
				pwd: '',
				confirm_pwd: '',
	    }
	  },
	  methods:{
			// 点击注册
			reg() {
				if(this.email == '' || this.name == '' || this.pwd == '' || this.confirm_pwd == ''){
					this.$message.error('请填写完整的注册信息');
					return
				}
				this.verifyNum();
				this.verifyPwd();

				this.$axios({
					method:'post',
					url: apiUrl.reg_url,
					data:{
						username: this.name,
						email: this.email,
						password: this.pwd
					}
				}).then((res) => {
					if(res.code == 1) {
						this.$router.push('./Login');
						this.$message({
							message: '注册成功，请登录！！',
							type: 'success'
						});
					}
				})
			},
			// 验证手机号
			verifyNum() {
				let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
				if(!(re.test(this.email))) {
					this.$message.error('请输入正确的邮箱');
					return
				}
			},
			// 验证密码是否一致
			verifyPwd() {
				if(this.pwd == ''){
					this.$message.error('请填写密码');
					return
				}
				if(this.confirm_pwd == ''){
					this.$message.error('请填写确认密码');
					return
				}
				if(this.pwd != this.confirm_pwd){
					this.$message.error('密码不一致，请重新输入');
					this.confirm_pwd = '';
					return
				}
			},
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
