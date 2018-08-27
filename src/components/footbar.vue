<template>
    <div class="footbar" v-if="status">
        <router-link to="/" active-class="curr" class="fbar-item">
            <div class="dbico icon-home fbar-ico fbar-ico1"></div>
            <p class="fbar-title">首页</p>
        </router-link>
        <router-link to="/hotmovie" active-class="curr" class="fbar-item">
            <div class="dbico icon-hot fbar-ico fbar-ico2"></div>
            <p class="fbar-title">正在热映</p>
        </router-link>
        <router-link to="/soonmovie" active-class="curr" class="fbar-item">
            <div class="dbico icon-like fbar-ico fbar-ico3"></div>
            <p class="fbar-title">即将上映</p>
        </router-link>
        <router-link to="/aboutus" active-class="curr" class="fbar-item">
            <div class="dbico icon-my fbar-ico fbar-ico4"></div>
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