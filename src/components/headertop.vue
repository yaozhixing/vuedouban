<template>
    <div class="p-head">
        <div class="logo"><router-link to="/"><img src="@/assets/images/common/logo.png"></router-link></div>
        <h2 class="phead-tit" id="headtitle">{{title}}</h2>
        <i></i>
    </div>
</template>

<script>
    export default {
        name:"headertop",
        watch:{
            $route(){
                this.title = this.$route.meta.title
            }
        },
        data(){
            return {
                title: this.$route.meta.title
            }
        }
    }
</script>

<style scoped>

</style>