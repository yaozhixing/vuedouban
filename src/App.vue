<template>
  <div id="app">
    <header-top/>
    <skeleton v-if="isloading"/>
    <router-view/>
    <foot-bar/>
  </div>
</template>

<script>
//设置rem单位
var html = document.getElementsByTagName("html")[0];
var change = 'orientationchange' in window ? 'orientationchange' : 'resize';
function setRem(){
	var width = html.getBoundingClientRect().width;
	var font = (width/15) > 30 ? 30 : (width/15);
	html.style.fontSize = font + "px";
}
setRem();
window.addEventListener(change, setRem, false);

import headerTop from "./components/headertop"
import footBar from "./components/footbar"
import { mapState, mapGetters } from "vuex"
import skeleton from "./components/skeleton"    //加载骨架层-首选方案
// import loading from "./components/loading"   loading备用方案

export default {
  name: 'App',
  components:{
    headerTop,
    footBar,
    skeleton
  },
  //计算loading状态，所以用computed
  computed:{
    ...mapGetters({
        //左边是状态，右边是getters的函数名
        isloading: 'changeLoad'
    })
  }
}

</script>

<style>

</style>
