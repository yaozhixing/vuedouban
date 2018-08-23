import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Hotmovie from '@/components/hotmovie'
import Soonmovie from '@/components/soonmovie'
import Newmovie from '@/components/newmovie'
import Aboutus from '@/components/aboutus'
import Subject from '@/components/subject'
import Notfind from '@/components/404'

Vue.use(Router)

let router =  new Router({
  mode: "history",
  routes: [
    //首页
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        title:"首页",
        footbar:true
      }
    },

    //正在热映
    {
      path:'/hotmovie',
      name: 'Hotmovie',
      component: Hotmovie,
      meta:{
        title:"影院热映",
        footbar:false
      }
    },

    //即将上映
    {
      path:'/soonmovie',
      name: 'Soonmovie',
      component: Soonmovie,
      meta:{
        title:"即将上映",
        footbar:false
      }
    },

    //新片榜
    {
      path:'/newmovie',
      name: 'Newmovie',
      component: Newmovie,
      meta:{
        title:"新片速递",
        footbar:false
      }
    },

    //关于我
    {
      path:'/aboutus',
      name: 'Aboutus',
      component: Aboutus,
      meta:{
        title:"关于我",
        footbar:true
      }
    },

    //电影内页
    {
      path:'/subject/:id?',
      name: 'Subject',
      component: Subject,
      meta:{
        title:"电影正文",
        footbar:false
      }
    },

    //404
    {
      path:"*",
      name:"Notfind",
      component: Notfind,
      meta:{
        title:"豆瓣",
        footbar:true
      }
    }
  ]
})

router.beforeEach( (to,from,next)=>{
  let titlename = to.meta.title;
  document.title = titlename;
  //document.getElementById("headtitle").innerText = titlename
  next()
} )

export default router;