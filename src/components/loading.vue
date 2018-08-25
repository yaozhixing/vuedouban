<template>
	<div class="p-loading">
		<span class="dbico icon-loading2 load-ico"></span>
		<span class="load-text">{{loadtext}}</span>
	</div>
</template>

<script>
export default {

  name: 'loading',

  data () {
    return {
    	loadtext: "正在加载..."
    }
  }
}
</script>

<style lang="css" scoped>
</style>