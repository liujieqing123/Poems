<template>
	<div class="footer">
		<div class="container">
			<ul>
				<li>
					<div class="li_title">最优秀的古诗词文化社区</div>
					<div class="li_content">
						<span>关于我们</span>
						<span>免责声明</span>
						<span>联系我们</span>
						<span>建议反馈</span>
					</div>
				</li>
				<li>
					<div class="li_title">帮助？</div>
					<div class="li_content">
						<span>诗人</span>
						<span>作家</span>
						<span>生命值</span>
						<span>图床</span>
					</div>
				</li>
				<li>
					<div class="li_title">友情链接</div>
					<div class="li_content">
						<span>古风网</span>
						<span>枫亭书院</span>
						<span>古诗文网</span>
					</div>
				</li>
			</ul>
			<div class="address">Copyright © 2015 - 2019 ruogoo.cn All rights reserved. · 京ICP备14006825号-3号</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'Footer',
	  components:{
			
	  },
	  data () {
	    return {
	      name:'footer'
	    }
	  },
	  methods:{
		 
	  }
	  
	}
</script>

<style lang="less" scoped>
	@import '../../styles/main.less';	
	.footer{
		width: 100%;
		height: 200px;
		background: #fff;
		border-top: 1px solid #ccc;
		box-shadow:0 0 4px #ddd;
		.container{
			ul{
				display: flex;
				justify-content: space-between;
				li{
					width: 376px;
					height: 66px;
					padding-top: 30px;
					.li_title{
						font-size: 16px;
						color: @ft2-color;
						margin-bottom: 20px;
					}
					.li_content{
						font-size: 12px;
						color: @ft1-color;
						span{
							margin-right: 10px;
							cursor: pointer;
						}
					}
				}
			}
			.address{
				height: 30px;
				border-bottom: 1px dashed #ccc;
				font-size: 12px;
				margin-top: 30px;
			}
		}
	}
</style>
