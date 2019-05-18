<template>
	<div class="my">
		<Header></Header>
		<div class="main">
			<div class="my_header">
				<div class="my_info">
					<div class="head_portrait">
						<img src="../../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg" />
					</div>
					<div class="my_item">
						<div class="my_name">离陌</div>
						<div class="my_sign">锋芒未露</div>
						<div class="my_hot">关注：0 &nbsp;&nbsp;&nbsp;粉丝：0</div>
					</div>
				</div>
			</div>
			<div class="my_content">
				<div class="container">
					<div class="publish">
						<div class="title">标题</div>
						<el-input v-model="title" placeholder="请输入标题"></el-input>
						<div class="title">概述</div>
						<el-input v-model="description" placeholder="请输入诗词概述" maxlength="30"></el-input>

						<div class="title">添加配图</div>
						<p class='hint_text'>提示：只可上传一张图片，点击图片可预览或删除图片</p>
						<el-upload
							action="http://47.107.107.212/api/Poem/upload"
							list-type="picture-card"
							:on-preview="handlePictureCardPreview"
							:on-remove="handleRemove"
							:on-success="uploadSuccess"
							:multiple="false"
							:limit="1">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>

						<div class="title">正文</div>
						<el-input 
							type="textarea"  
							placeholder="请输入诗词正文"
							show-word-limit 
							maxlength="800"
							:rows="30"
							v-model="textarea_text">
						</el-input>
					</div>
					<div class="sort">
						<div class="sort_title">分类</div>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<button @click='publish'>发表诗词</button>
						<div class="share_sentence" @click="ToShare">去分享句子</div>
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
		name: 'My',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				title: '',
				textarea_text: '',
				description: '',
				options: [],
				value: '',
				img_url:'',
				dialogImageUrl: '',
        dialogVisible: false
			}
		},
		created() {
			this.getTypeData();
		},
		methods: {
			ToShare(){
				this.$router.push('/ShareSentence')
			},
			// 获取类目列表
			getTypeData() {
				this.$axios({
					url:apiUrl.PoemCate_url,
				}).then((res) => {
					if(res.code == 1) {
						let typeData = res.data;
						for(let i=0;i<typeData.length;i++) {
							let obj={
								value: typeData[i].id,
								label: typeData[i].pcate_name,
							}
							this.options.push(obj)
						}
					}
				})
			},
			// 添加文章
			addData() {
				this.$axios({
					url:apiUrl.poemInfo_url,
					method: 'post',
					data: {
						author: sessionStorage.getItem('username'),
						title: this.title,
						content: this.textarea_text,
						image:this.img_url,
						description: this.description,
						pcate_id:this.value,
					}
				}).then((res) => {
					// console.log(res)
					if(res.code == 1) {
						this.title = '';
						this.textarea_text = '';
						this.description = '';
						this.value = '';
						this.handleRemove();
						this.getTypeData();
						this.$notify({
							title: '成功',
							message: '诗词发表成功',
							type: 'success'
						});
					}
				})
			},
			// 发表
			publish() {
				if(this.title == '') {
					this.$message({
						message: '请输入文章标题',
						type: 'warning'
					});
					return
				}
				if (this.description == '') {
					this.$message({
						message: '请填写文章简述',
						type: 'warning'
					});
					return
				}
				if (this.textarea_text == '') {
					this.$message({
						message: '请填写文章内容',
						type: 'warning'
					});
					return
				}
				if (this.value == '') {
					this.$message({
						message: '请选择文章分类',
						type: 'warning'
					});
					return
				}
				if (this.img_url == '') {
					this.$message({
						message: '请上传图片',
						type: 'warning'
					});
					return
				}
				this.addData()
			},
			uploadSuccess(response, file, fileList) {
				this.img_url = file.url;
			},
			handleRemove(file, fileList) {
				this.img_url = ''
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
		}

	}
</script>

<style lang="less" scoped>
	@import '../../../styles/main.less';

	.my {
		.main {
			.my_header {
				width: 100%;
				height: 330px;
				background-image: url('../../../../static/images/24_1250_66869.png');
				background-size: 100% 100%;
				background-repeat: no-repeat;
				display: flex;
				justify-content: flex-end;
				flex-direction: column;
				padding-bottom: 30px;

				.my_info {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding: 0px 220px;

					.head_portrait {
						width: 160px;
						height: 160px;
						border: 4px solid #ccc;
						border-radius: 50%;

						img {
							width: 160px;
							height: 160px;
							border-radius: 50%;
						}
					}

					.my_item {
						color: #fff;
						margin-left: 50px;
						line-height: 60px;

						.my_name {
							font-size: 24px;
						}

						.my_sign {
							width: 66px;
							height: 25px;
							background: rgb(176, 176, 176);
							border-radius: 4px;
							font-size: 12px;
							text-align: center;
							line-height: 25px;
						}

						.my_hot {
							font-size: 12px;
						}
					}
				}
			}

			.my_content {
				background: #f3f3f3;
				padding: 20px 0;

				.container {
					display: flex;
					justify-content: space-between;

					.publish {
						width: 771px;
						min-height: 514px;
						background: #fff;
						border: 1px solid #ccc;
						box-shadow: 0 0 4px #ddd;
						padding: 5px 20px 20px 20px;

						.title {
							font-size: 14px;
							height: 28px;
							margin-top: 30px;
						}
						.hint_text {
							font-size: 12px;
							color: #999;
							margin-bottom: 10px;
						}
					}

					.sort {
						width: 310px;
						height: 280px;
						background: #fff;
						border: 1px solid #ccc;
						box-shadow: 0 0 4px #ddd;
						padding: 20px 20px;
						.sort_title {
							font-size: 14px;
							height: 30px;
							line-height: 30px;
							margin-top: 20px;
						}
						button{
							width: 310px;
							height: 32px;
							background: @ft1-color;
							border-radius: 5px;
							color: #fff;
							margin-top: 80px;
							cursor: pointer;
						}
						.share_sentence{
							width: 100px;
							height: 25px;
							border: 3px solid @ft1-color;
							margin-top: 30px;
							font-size: 14px;
							text-align: center;
							line-height: 25px;
							cursor: pointer;
							color: @ft1-color;
						}
					}
				}
			}
		}
	}
</style>
