<template>
    <div class="laybox">
        <div class="lay-tit list-tit">
            <span class="title">{{title}}</span>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in soondata" :key="item.id" :imgsrc="item.images.large" :id="item.id" :title="item.title" :score="item.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from './movieitem'
    import axios from 'axios'

    export default {
        name:"soonmovie",
        components:{
            movieItem
        },
        data(){
            return{
                title: "即将上映",
                soondata:{}
            }
        },
        created(){
            axios.get("/api/movie/coming_soon")
            .then((res)=>{
                console.log(res);
                this.soondata = res.data.subjects;
            })
        }
    }
</script>

<style scoped>

</style>