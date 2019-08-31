<template>
    <div class='msite'>
        <div class='header'>
            <div slot="search" class='search'>
                <i class="fa fa-search fa-lg"></i>
            </div>
            <Header headTitle='上海市青浦区东风大陆街道'></Header>
            <div slot="logo" class='logo'>
                <span>注册/登录</span>
            </div>
        </div>
        <div class="swiper-container"> 
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <figure v-for="i in 4" :key="i">
                        <img src="./images/nav/1.jpg" alt="">
                        <figcaption>甜品饮品</figcaption>
                    </figure>
                </div>
                <!-- <div class="swiper-slide">
                    <figure v-for="i in 8" :key="i">
                        <img src="./images/nav/2.jpg" alt="">
                        <figcaption>甜品饮品</figcaption>
                    </figure>
                </div> -->
            </div>
            <!-- 如果需要分页器  -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header/Header.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
    mounted() {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    components:{
        Header,
  }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
    .msite
        width 100%
        height 100%
        background-color #f2f2f2
    .header
        width 100%
        height 46px
        position relative
    .search
        width 20px
        height 20px
        position absolute
        top 50%
        transform translateY(-50%)
        z-index 200
        left 25px
        color white
    .logo
        width 80px
        height 20px
        position absolute
        top 50%
        transform translateY(-50%)
        z-index 200
        right  10px
        font-size 14px
        line-height 20px
        text-align center
        color white
	
        
</style>