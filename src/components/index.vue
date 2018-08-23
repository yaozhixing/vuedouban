<template>
    <div>
        <index-hot/>
        <p class="p-space"></p>
        <index-soon/>
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