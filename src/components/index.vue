<template>
    <div>
        <index-hot/>
        <p class="p-space"></p>
        <index-soon/>
        <p style="height: 2rem"></p>
    </div>
</template>

<script>
    import indexHot from "./indexhot"
    import indexSoon from "./indexsoon"
    
    import axios from "axios"

    export default {
        name:"index",
        components:{
            indexHot,
            indexSoon
        },
        data(){
            return {
                           
            }
        }
    }
</script>

<style scoped lang="less">
    
</style>