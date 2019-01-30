<template>
    <div class="item">
        <div class="title">
            item-title
        </div>
        <test-swiper></test-swiper>
        <scroll-word :data="scrollWords"></scroll-word>
    </div>
</template>
<script>
import testSwiper from '@/components/swiper.vue';
import testScrollSwiper from '@/components/scrollWord.vue';
export default {
    name: 'item-page',
    data () {
        return {
            scrollWords:['1111111', '22222222', '3333333', '4444444']
        }
    },
    mounted () {
        console.log(this.$route);
    },
    components:{
        testSwiper:testSwiper,
        scrollWord:testScrollSwiper
    }
}
</script>

<style scoped lang="less">
    .item{
        .title{
            background-color:orange
        }
    }
</style>
