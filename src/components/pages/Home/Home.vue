<template>
	<div class="home">
		<Header></Header>
	</div>
</template>

<script>
	import Header from '../../commons/Header'
	export default {
	  name: 'Home',
	  components:{
			Header
	  },
	  data () {
	    return {
	      name:'Home'
	    }
	  }
	  
	}
</script>

<style lang="less" scoped>
	.home{
		color: red;
	}
</style>
