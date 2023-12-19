<template>
   <div class="products">
    <Swiper
    :modules="modules"
    :arrows="true"
    :navigation="true"
    :pagination="false"
    :breakpoints="breakpoints"
    loop="true"
    class="swiper"
    >
    <SwiperSlide v-for="(photo,index) in photos" :key="index" >
        
            <Card :img="photo.img" :id="photo.id" :name="photo.name"/>
        
    </SwiperSlide>
    
    </Swiper>
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
    const glob=import.meta.glob('~/assets/imgs/*')
    const images=Object.values(glob).map(imageModule=>imageModule.default)
    console.log(glob)
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
  const store=useStore()
  const photos=store.photos
    </script>
    <style lang="scss">
      .products{  
        .swiper-wrapper {
        padding-top: 2rem;
        padding-bottom: 5rem;
        .swiper-slide {
        height:400px;
        margin-left: 20px;
          }
    
    }
    .swiper-button-prev,.swiper-button-next{
        bottom:-40%;
        left: 0;
        right: 0;
        margin: auto;
        }
    .swiper-button-prev::after,.swiper-button-next::after{
        background-color: #12b488;
        color: white;
        padding: 10px;
         }
     .swiper-button-prev{
        transform:translate(-200%) ;
    }
    .btn2{
        background-color: #12b488;
        color: white;
        padding: 10px;
    
    }
    .btn2:hover{
        background-color: #112222;
    }
    .swiper-button-next{
        transform:translate(200%) ;
        
    } 
   }
   
    
    </style>