<template>
    <div class="p-head">
        <h2 class="phead-tit" id="headtitle">{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name:"headertop",
        /*beforeRouteEnter(to,from,next){
            next((vm)=>{
                vm.title = to.meta.title
            });
        },
        beforeRouteUpdate(to,from,next){
            this.title = to.meta.title
            next();
        },*/
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