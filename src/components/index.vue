<template>
    <div>
        <index-hot/>
        <p class="p-space"></p>
        <index-soon/>
        <p class="p-space"></p>
        <index-America/>
        <p style="height: 2rem"></p>
    </div>
</template>

<script>
    import indexHot from "./indexhot"
    import indexSoon from "./indexsoon"
    import indexAmerica from "./indexamerica"
    
    import axios from "axios"

    export default {
        name:"index",
        components:{
            indexHot,
            indexSoon,
            indexAmerica
        },
        data(){
            return {
                           
            }
        }
    }
</script>

<style scoped lang="less">
    
</style>