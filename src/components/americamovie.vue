<template>
    <div class="laybox">
        <div class="lay-tit list-tit">
            <span class="title">{{title}}</span>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in americadata" :key="item.id" :imgsrc="item.subject.images.large" :id="item.subject.id" :title="item.subject.title" :score="item.subject.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from './movieitem'
    import {getAmericaList} from "../api/common"

    export default {
        name:"newmovie",
        components:{
            movieItem
        },
        data(){
            return{
                title: "北美票房榜",
                americadata:{}
            }
        },
        created(){
            getAmericaList()
            .then((res)=>{
                console.log(res);
                this.americadata = res.data.subjects;
            })
        }
    }
</script>

<style scoped>

</style>