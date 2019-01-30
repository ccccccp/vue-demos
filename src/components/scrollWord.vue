<template>
  <div class="swiper-container-scroll">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-no-swiping" :key="i" v-for="(item, i) in data">{{item}}</div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "../assets/css/swiper.min.css";
export default {
  name: "swiper-component",
  data () {
    return {
      swiper: null
    };
  },
  props: ["data"],
  mounted () {
    this.swiper = new Swiper(".swiper-container-scroll", {
      direction: "vertical",
      loop: true,
      noSwiping: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
  }
};
</script>
<style lang="less">
.swiper-container-scroll {
  width: 400px;
  height: 30px;
  overflow: hidden;
  line-height: 30px;
  border: 1px solid red;
  .swiper-wrapper {
    .swiper-slide {
      //width:100%;
      &:nth-child(1) {
        background-color: aqua;
      }
      &:nth-child(2) {
        background-color: red;
      }
      &:nth-child(3) {
        background-color: blue;
      }
      &:nth-child(4) {
        background-color: green;
      }
    }
  }
}
</style>
