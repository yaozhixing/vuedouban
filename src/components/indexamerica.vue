<template>
    <div class="laybox">
        <div class="lay-tit">
            <span class="title">{{newtitle}}</span>
            <router-link class="more" to="/americamovie">更多</router-link>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in americadata" :key="item.id" :imgsrc="item.subject.images.large" :id="item.subject.id" :title="item.subject.title" :score="item.subject.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from "./movieitem"
    import {getAmericaList} from "../api/common"

    import axios from "axios"

    export default {
        name:"indexhot",
        components:{
            movieItem
        },
        data(){
            return {
                newtitle:"北美票房榜",
                totalnum:6,
                americadata: {}
            }
        },
        created(){
            getAmericaList()
            .then( (res)=>{
                //console.log(res);
                this.americadata = res.data.subjects.splice(0,6)
            })
            .catch( (error)=>{
                console.log(error)
            })
        }

    }
</script>

<style scoped>

</style>