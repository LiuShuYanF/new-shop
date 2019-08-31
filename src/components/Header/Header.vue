<template>
    <header class='head_top'>
        <slot name='search'></slot>
        <section class="title_head">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name='logo'></slot>
    </header>
</template>
<script>
export default {
    props:{
        headTitle:String,
    }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
    .head_top
        background-color #3190e8
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 46px
        .title_head
            width 50%
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            color #fff
            font-size 16px
</style>