<template>
    <div>
        <div class="hotb-img"><router-link :to="{path:'/subject/'+id}"><img :src="imgsrc" :alt="title" /></router-link></div>
        <h2 class="hotb-title tc"><router-link :to="{path:'/subject/'+id}">{{title}}</router-link></h2>
        <p class="hotb-score tc">评分：{{score}}</p>
    </div>
</template>

<script>
    export default {
        name:"movieitem",
        props:["imgsrc",'title','id','score'],
    }
</script>

<style scoped>

</style>