<template>
    <div>
        <div class="hotb-img"><router-link :to="{path:'/subject/'+id}"><img :src="imgsrc" :alt="title" /></router-link></div>
        <h2 class="hotb-title tc"><router-link :to="{path:'/subject/'+id}">{{title}}</router-link></h2>

        <div v-if="scostate" class="hotb-score tc" :class="scorecurr"><i></i><i></i><i></i><i></i><i></i>{{sco}}</div>
        <div v-else class="hotb-score tc noscore">暂无评论</div>
    </div>
</template>

<script>
    export default {
        name:"movieitem",
        props:["imgsrc",'title','id','score'],
        data(){
        	return{
        		sco: this.score,
        		scorecurr: this.getscroe(this.score),
        		scostate: this.getscoreState(this.score)
        	}
        },
        methods:{
        	getscroe(num){
        		let zsco = Math.round(num);
        		if( zsco > 0 && zsco <=2 ){
        			return "sco1";
        		}
        		else if( zsco > 2 && zsco <= 4 ){
        			return "sco2";
        		}
        		else if( zsco > 4 && zsco <= 6 ){
        			return "sco3";
        		}
        		else if( zsco > 6 && zsco <= 8 ){
        			return "sco4";
        		}
        		else if( zsco > 8 && zsco <= 10 ){
        			return "sco5";
        		}
        	},
        	getscoreState(num){
                return num == 0 ? false : true;
        	}
        }
    }
</script>

<style scoped>

</style>