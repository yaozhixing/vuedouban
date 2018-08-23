<template>
  <div id="app">
    <header-top/>
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

export default {
  name: 'App',
  components:{
    headerTop,
    footBar
  }
}

</script>

<style>

</style>
