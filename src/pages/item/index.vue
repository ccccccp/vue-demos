<template>
    <div class="item">
        <div class="title">
            item-title
        </div>
        <test-swiper></test-swiper>
    </div>
</template>
<script>
import testSwiper from '@/components/swiper.vue';
export default {
    name: 'item-page',
    mounted () {
        console.log(this.$route);
    },
    components:{
        testSwiper:testSwiper
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