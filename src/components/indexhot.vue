<template>
    <div class="laybox">
        <div class="lay-tit">
            <span class="title">{{hottitle}}</span>
            <router-link class="more" to="/hotmovie">更多</router-link>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in hotdata" :key="item.id" :imgsrc="item.images.large" :id="item.id" :title="item.title" :score="item.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from "./movieitem"
    import axios from "axios"

    export default {
        name:"indexhot",
        components:{
            movieItem
        },
        data(){
            return {
                hottitle:"影院热映",
                totalnum:6,
                hotdata: {}
            }
        },
        created(){
            axios.get("/api/movie/in_theaters")
            .then( (res)=>{
                console.log(res);
                this.hotdata = res.data.subjects.splice(0,6)
            })
            .catch( (error)=>{
                console.log(error)
            } )
        }

    }
</script>

<style scoped>

</style>