<template>
  <div class='page'>
    <div class='page_bg' :style="{backgroundImage: 'url(' + img_url + ')'}"></div>
    <div class='page_item'>
      <div class='page_left'>
        <ul>
          <li>{{img_name}}</li>
          <li>{{author}}</li>
          <li><span>更多推荐</span></li>
        </ul>
      </div>
      <div class='page_right'>
        <div class='img_item'><img :src="img_url" alt=""></div>
        <ul class='img_list'>
          <li v-for='(item,index) in imgData' :key='index' @mouseover='selectImg(item,index)'><div><img :src="item.img_url" alt=""><span class='img_list_span' :class='{spanStyle: imgIndex == index}'>{{item.name}}</span></div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img_url: 'https://o.ruogoo.cn/cover/DIY2pLJQcPWMiNxYnSQpaEEwQBDXI52bWnGoHwwm.jpeg',
        img_name: '鹧鸪天·葬花哀花花自怜',
        author:'倾江落月',
        imgData: [
          {name: '鹧鸪天·葬花哀花花自怜',author:'倾江落月',img_url:'../../../static/images/DIY2pLJQcPWMiNxYnSQpaEEwQBDXI52bWnGoHwwm.jpeg'},
          {name: '临江仙·云中画',author:'倾江落月',img_url:'../../../static/images/MsK0UHfccG6YzDBpyYeJ8VgnGl79wOmHfyRmHcmz.jpeg'},
          {name: '卜算子·云觞倾江取落月为酒',author:'暮紫如烟',img_url:'../../../static/images/cXKdn9wioEJfA5VT7Ni7YiU0vQ7hGeGRYqg8Vq4O.jpeg'},
          {name: '留春令',author:'倾江落月',img_url:'../../../static/images/CFK6dpbXXhKpchDq9sX9ifAJ8gEmQmFzsGMU8CZY.jpeg'},
          {name: '雪赋',author:'暮紫如烟',img_url:'../../../static/images/4AdxZ3QiuZKmPkRFzzv7GDTgwrb12kAj64pjq4qH.jpeg'},
          {name: '临江仙·人间难敌是遗忘',author:'倾江落月',img_url:'../../../static/images/c838e7d49165bda1533dd923a68bd29d.jpg'},
          {name: '踏莎行·流光几度',author:'倾江落月',img_url:'../../../static/images/86194a2f0b5aa3edf9f3995bbb8713aa.jpg'},
          {name: '南乡子·次韵梦入溪云',author:'暮紫如烟',img_url:'../../../static/images/4a224b4140adbd819acc5cd20d9aedaf.jpg'}
        ],
        imgIndex:'0',
      }
    },
    methods: {
      selectImg(obj,index) {
        this.img_url = obj.img_url;
        this.img_name = obj.name;
        this.author = obj.author;
        this.imgIndex = index;
      }
    }
  }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.page {
  width: 100%;
  height: 400px;
  margin: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
}
.page_bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  filter: blur(15px);
}
.page_item {
  width: 80%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.page_left {
  width: 30%;
}
.page_left>ul>li {
  text-align: center;
  cursor: pointer;
}
.page_left>ul>li:hover {
  text-shadow: 1px 1px 5px #e8e8e8;
}
.page_left>ul>li:nth-child(1) {
  margin-bottom: 20px;
  font-size: 24px;
}
.page_left>ul>li:nth-child(2) {
  margin-bottom: 25px;
  font-size: 14px;
}
.page_left>ul>li:nth-child(3) {
  font-size: 14px;
  color: #999;
}
.page_left>ul>li:nth-child(3)>span {
  border: 1px solid #fff;
  padding: 5px 10px;
}
.page_left>ul>li:nth-child(3)>span:hover {
  color: #fff;
}

.page_right {
  width: 60%;
  height: 320px;
  display: flex;
  align-items: center;
}
.img_item {
  width: 240px;
  height: 100%;
  transition: all 0.2s;
  box-shadow: 0 0 10px #555;
}
.img_item>img {
  width: 100%;
  height: 100%;
}
.img_list {
  width: 460px;
  height: 90%;
  margin-left: 20px;
  box-sizing: border-box;
  background: rgba(0,0,0,.2);
}
.img_list>li {
  width: 25%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  cursor: pointer;
}
.img_list>li>div {
  width: 90%;
  height: 90%;
  position: relative;
  overflow: hidden;
}
.img_list>li>div>img {
  width: 100%;
  height: 100%;
}
.img_list_span {
  width: 100%;
  padding: 5px 5px;
  box-sizing: border-box;
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 2px solid #cc7030;
  text-align: center;
  background: rgba(0,0,0,.2);
  color:#fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  transition: all .5s;
}
.spanStyle {
  bottom: 0px;
}
</style>