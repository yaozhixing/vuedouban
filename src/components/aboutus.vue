<template>
    <div>
        <div class="myintro">
            <p class="name">Danny <i>web前端开发工程师</i></p>
            <p class="des">折腾就折腾着，我是一名前端道路的追逐者...</p>
            <p class="githubadd">Github：https://github.com/</p>
           
        </div>
         <p class="p-space"></p>
        <div class="myintro-content">
            <p class="title">个人特长与专项：</p>
            <ul>
                <li>1、熟练掌握html,css(css3),less,scss，原生javascript，高效极致到完美的静态页面输出；</li>
                <li>2、擅长解决浏览器兼容性问题；</li>
                <li>3、擅长H5移动端开发以及微信公众号开发；</li>
                <li>4、有良好的网站命名规范和指定文档规范；</li>
                <li>5、独立配置webpack,gulp,掌握vuejs，requiejs，jquery等主流开发框架和库，熟悉组件化开发；</li>
                <li>6、了解nodejs开发，熟悉express开发框架，独立搭建过爬虫，聊天室</li>
                <li>7、聊天室演示地址：<a href="https://chatnice.herokuapp.com/">https://chatnice.herokuapp.com/</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getHotList} from "../api/common";

    export default {
        name:"aboutus",
        created(){

            getHotList()
            .then( res => {
                console.log(res)
            })
            .catch( error =>{
                console.log(error)
            })
            
        }
    }
</script>

<style scoped>

</style>