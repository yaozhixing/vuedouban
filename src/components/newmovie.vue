<template>
    <div class="laybox">
        <div class="lay-tit list-tit">
            <span class="title">{{title}}</span>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in newdata" :key="item.id" :imgsrc="item.images.large" :id="item.id" :title="item.title" :score="item.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from './movieitem'
    import {getNewList} from "../api/common"

    export default {
        name:"newmovie",
        components:{
            movieItem
        },
        data(){
            return{
                title: "新片上映",
                newdata:{}
            }
        },
        created(){
            getNewList()
            .then((res)=>{
                console.log(res);
                this.newdata = res.data.subjects;
            })
        }
    }
</script>

<style scoped>

</style>