import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/pages/Home/Home' //首页
import Reg from '../components/pages/Reg/Reg' //注册
import Login from '../components/pages/Login/Login' //登录
import Sentence from '../components/pages/Sentence/Sentence' //句子
import Poetry from '../components/pages/Poetry/Poetry' //诗词
import Author from '../components/pages/Author/Author' //作者
import AncientBooks from '../components/pages/AncientBooks/AncientBooks' //古籍
import DetailsPoetry from '../components/pages/DetailsPoetry/DetailsPoetry' //诗词详情
import AncientDetail from '../components/pages/AncientDetail/AncientDetail' //诗词详情
import My from '../components/pages/My/My' //我的
import ShareSentence from '../components/pages/ShareSentence/ShareSentence' //分享句子

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
		{
      path: '/Home',
      name: 'Home',
      component: Home
    },
		{
		  path: '/Login',
		  name: 'Login',
		  component: Login
		},
		{
		  path: '/Reg',
		  name: 'Reg',
		  component: Reg
		},
		{
		  path: '/Sentence',
		  name: 'Sentence',
		  component: Sentence
		},
		{
		  path: '/Poetry',
		  name: 'Poetry',
		  component: Poetry
		},
		{
		  path: '/Author',
		  name: 'Author',
		  component: Author
		},
		{
		  path: '/AncientBooks',
		  name: 'AncientBooks',
		  component: AncientBooks
		},
		{
		  path: '/DetailsPoetry',
		  name: 'DetailsPoetry',
		  component: DetailsPoetry
		},
		{
		  path: '/AncientDetail',
		  name: 'AncientDetail',
		  component: AncientDetail
		},
		{
		  path: '/My',
		  name: 'My',
		  component: My
		},
		{
		  path: '/ShareSentence',
		  name: 'ShareSentence',
		  component: ShareSentence
		},
  ]
})
