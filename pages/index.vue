<template>
  <div class="container flex">
    <section class="sec1 h-100">
      <h1 class="text-cyan-900">Our Techno Store</h1>
    </section>
    <section class="sec2">
      <Swiper
    :modules="modules"
    :arrows="false"
    :navigation="false"
    :pagination="false"
    :breakpoints="breakpoints"
    :autoplay="true"
    loop="true"
    class="swiper"
  
    >
    <SwiperSlide v-for="(photo,index) in photos" :key="index" >
      <img :src="`/imgs/${photo.img}`" alt="">
    </SwiperSlide>
    
    </Swiper>
    </section>
  </div>
  
</template>
<script setup>
import { Swiper,SwiperSlide } from 'swiper/vue';
    import { useStore } from '~/store';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
    import 'swiper/css';
      import 'swiper/css/navigation';
      import 'swiper/css/pagination';
      import 'swiper/css/scrollbar';
      const  modules= [Navigation, Pagination, Scrollbar, A11y]
const store=useStore()
const photos=store.photos
const breakpoints={
        320:{
        spaceBetween:3,
        slidesPerView:1,
            },
        480:{
            spaceBetween:10,
            slidesPerView:2,
            },
        768:{
            spaceBetween:10,
            slidesPerView:3,
            },
        1024:{
                spaceBetween:10,
                slidesPerView:4,
            }
       }
</script>
<style lang="scss" scoped>
.container{
  height: 100svh;
 .sec1{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: relative;
   h1{
    font-size: 100px;
   }
   @media screen and (max-width:700px){
    h1{
    font-size: 50px;
   }
   }
 }
 .sec1::before{
  content: '';
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width: 50%;
  background-color:cyan;
  transform: skew(50deg) translateY(-50%);
  z-index: -1;

 }
 .sec1::after{
  content: '';
  position: absolute;
  top:0;
  right:0;
  height: 100%;
  width: 50%;
  background-color: cyan;
  transform: skew(-50deg)  translateY(-50%);
  z-index: -1;

 }
 .sec2{
  position: absolute;
  display: flex;
  justify-content:space-around;
  gap: 20px;
  left: 0;
  bottom: 0;
  background: transparent;
  width: 100%;
  height: 50%;
  .swiper-slide{
     display: flex;
     justify-content: center;
     img{
      width:200px;
      height: 200px;
     }
  }
  

 }
}

</style>
