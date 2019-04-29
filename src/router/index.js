import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/pages/Home/Home' //某一个组件
import Reg from '../components/pages/Reg/Reg' //某一个组件
import Login from '../components/pages/Login/Login' //某一个组件

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
  ]
})
