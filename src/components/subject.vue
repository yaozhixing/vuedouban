<template>
    <div>
        <div class="suject">
            <h2 class="movie-title">{{title}}</h2>
            <section class="mov-main">
                <div class="mov-cs">
                    <div class="score-ctn">评分：{{score}}</div>
                    <p class="pl">{{reviews_count}}人评价</p>
                    <div class="mov-des"> {{genres}}  {{directors}}  {{casts}} / {{countries}} 上映</div>
                </div>
                <div class="mov-img"><img :src="img" :alt="title"></div>
            </section>
            <div class="movie-looknumber">
                <span class="want-n">想看<i>（{{wish_count}}）</i></span>
                <span class="review-n">看过<i>（{{collect_count}}）</i></span>
            </div>
            <div class="movie-descript">
                <h2 class="title">{{title}}剧情简介</h2>
                <div class="content">>{{summary}}</div>
            </div>
        </div>
        <p class="p-space"></p>
        <recom-movie/>
    </div>
</template>

<script>
    import recomMovie from "./recommovie"
    //import axios from 'axios'
    import {getMovieSubject} from "../api/common"

    export default {
        components:{
            recomMovie
        },
        name:"suject",
        watch:{
            $route(){
                //console.log(this.$route.params.id)
                this.getsubject()
            }
        },
        created(){
            //console.log(this.$route.params.id);
            this.getsubject()
        },
        data(){
            return{
                id: '',
                info:{},
                alt:'',
                title:'',
                reviews_count:0,
                score:0,
                directors:'',
                countries:'',
                casts:'',
                img:'',
                wish_count:0,
                collect_count:0,
                genres:'',
                summary:''
            }
        },
        methods:{
            getsubject(){
                this.id = this.$route.params.id;
                getMovieSubject(this.id)
                .then((res)=>{
                    console.log(res)
                    this.info = res.data
                    this.alt = this.info.alt
                    this.title = this.info.title
                    this.score = this.info.rating.average
                    this.reviews_count = this.info.reviews_count
                    this.directors = this.getcarts(this.info.directors) + "(导演)"
                    this.genres = this.getgenres(this.info.genres)
                    this.casts = this.getcarts(this.info.casts)
                    this.img = this.info.images.large
                    this.wish_count = this.info.wish_count
                    this.collect_count = this.info.collect_count
                    this.summary = this.info.summary
                    this.countries = this.getgenres(this.info.countries)
                })
                .catch((error)=>{
                    console.log(error)
                })
            },
            getgenres(arr){
                let str ="";
                arr.forEach(function(v){
                    str += " " + v;
                })
                return str;
            },
            getcarts(arr){
                let str ="";
                arr.forEach(function(n,i,arr){
                    str += " / " + arr[i]['name'];
                })
                return str;
            }
        }
    }
</script>

<style scoped>

</style>