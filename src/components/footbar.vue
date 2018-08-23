<template>
    <div class="footbar" v-if="status">
        <router-link to="/" class="fbar-item curr">
            <div class="fbar-ico fbar-ico1"></div>
            <p class="fbar-title">首页</p>
        </router-link>
        <router-link to="/hotmovie" class="fbar-item">
            <div class="fbar-ico fbar-ico2"></div>
            <p class="fbar-title">正在热映</p>
        </router-link>
        <router-link to="/soonmovie" class="fbar-item">
            <div class="fbar-ico fbar-ico3"></div>
            <p class="fbar-title">即将上映</p>
        </router-link>
        <router-link to="/aboutus" class="fbar-item">
            <div class="fbar-ico fbar-ico4"></div>
            <p class="fbar-title">关于我</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                status:this.$route.meta.footbar
            }
        },
        watch:{
            $route(){
                this.status = this.$route.meta.footbar
            }
        },
    }
</script>

<style scoped>

</style>