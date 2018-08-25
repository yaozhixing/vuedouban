<template>
    <div class="laybox">
        <div class="lay-tit">
            <span class="title">{{title}}</span>
        </div>
        <div class="lay-main">
            <movie-item class="hotbox"  v-for="item in likedata" :key="item.id" :imgsrc="item.images.large" :id="item.id" :title="item.title" :score="item.rating.average"/>
        </div>
    </div>
</template>

<script>
    import movieItem from "./movieitem"
    import {getRecomList} from "../api/common"

    export default {
        name:"indexhot",
        components:{
            movieItem
        },
        data(){
            return {
                title:"猜你喜欢",
                totalnum:6,
                likedata: {}
            }
        },
        created(){
            getRecomList()
            .then( (res)=>{
                //console.log(res);
                this.likedata = res.data.subjects
                this.likedata = this.likedata.sort(this.arrayram)
                this.likedata = this.likedata.splice(0,9)
                console.log(this.likedata)
            })
            .catch( (error)=>{
                console.log(error)
            } )
        },
        methods:{
            arrayram(a,b){
                return Math.random() > 0.5 ? 1 : -1
            }
        }

    }
</script>

<style scoped>

</style>