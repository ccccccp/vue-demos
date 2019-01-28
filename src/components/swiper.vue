<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">1111</div>
            <div class="swiper-slide">22222</div>
            <div class="swiper-slide">33333</div>
            <div class="swiper-slide">4444</div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import '../assets/css/swiper.min.css';
export default {
    name: 'swiper-component',
    data () {
        return {
            swiper : null
        }
    },
    mounted () {
        this.swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            initialSlide: 1,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: -20,
                depth: 0,
                modifier: 1,
                slideShadows: false
            }
        })
    }

}
</script>
<style lang="less">
    .swiper-container{
        width:400px;
        height:400px;
        border:1px solid red;
        .swiper-wrapper{
            .swiper-slide{
                width:70%;
                box-sizing: content-box;
                &.swiper-slide-prev{
                    opacity:0.5;
                }
                &.swiper-slide-next{
                    opacity:0.3;
                }
                &:nth-child(1){
                    background-color:aqua
                }
                &:nth-child(2){
                    background-color:red
                }
                &:nth-child(3){
                    background-color:blue
                }
                &:nth-child(4){
                    background-color:green
                }
            }
        }
    }
    
</style>
