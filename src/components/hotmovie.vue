<template>
    <div class="laybox">
        <div class="lay-tit list-tit">
            <span class="title">{{hottitle}}</span>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in hotdata" :key="item.id" :imgsrc="item.images.large" :id="item.id" :title="item.title" :score="item.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from './movieitem'
    import {getHotList} from "../api/common"

    export default {
        name:"hotmovie",
        components:{
            movieItem
        },
        data(){
            return{
                hottitle: "影院热映",
                hotdata:{}
            }
        },
        created(){
            getHotList()
            .then((res)=>{
                console.log(res);
                this.hotdata = res.data.subjects;
            })
        }
    }
</script>

<style scoped>

</style>