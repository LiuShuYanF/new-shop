<template>
    <div class='footer'>
       <section class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
           <i class="fa fa-camera-retro fa-lg"></i>
           <span>首页</span>
        </section>
        <section class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
            <i class="fa fa-search fa-lg"></i>
            <span>搜索</span>
        </section>
        <section class="guide_item" :class="{on:'/oeder'===$route.path}" @click="goTo('/oeder')">
            <i class="fa fa-outdent fa-lg"></i>
            <span>订单</span>
        </section>
        <section class="guide_item" :class="{on:'/personal'===$route.path}" @click="goTo('/personal')">
            <i class="fa fa-outdent fa-lg"></i>
            <span>我的</span>
        </section>
    </div>
</template>
<script>
export default {
    methods:{
        goTo(path){
            this.$router.replace(path)
        }
    }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
    .footer
        background-color #fff
        position fixed
        z-index 100
        left 0
        right 0
        bottom 0
        width 100%
        height 46px
        display flex
        border-top 1px solid #f2f2f2
        font-size 14px
    .guide_item
        flex 1
        display flex
        text-align center
        flex-direction column
        align-items center
        i
            width 20px
            height 20px
            margin-top 10px
        span 
            width 40px
            height 20px
    .on 
        color #3190e8
</style>