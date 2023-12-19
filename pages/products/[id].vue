<template>
    <div class="container">
      <section class="sec1 h-100">
          <h1 class="font-bold text-4xl">{{ name }}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit, quod voluptatibus sapiente expedita odit esse excepturi quis nulla aspernatur sunt odio minima dolore ipsam consequatur inventore quisquam eum ducimus!</p>
  <div class="icons">
    <button class="btn">shop Now</button>
  <MdiIcon icon="mdiArrowRightDropCircle"/>
  <span class="material-symbols-outlined">
  slideshow
  </span>
  
  </div>
      </section>
      <section class="img">
         
         
          <img :src="`/imgs/${image}`" alt="img" />
      
  
  
      </section>
    </div>
    
  </template>
  <script setup>
import {useStore} from '~/store'
  const id=useRoute().params.id
  const store =useStore()
  const photo=store.photos.find(p=>p.id==id)
const image=photo.img
const name=photo.name
  </script>
  <style lang="scss" scoped>
  .container{
    display: flex;
   .sec1{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap:20px;
     .icons{
      display: flex;
      flex-direction: row;
      gap:10px;
      align-items: center;
     }
     .btn:hover{
      transform: scale(1.1);
     }
   }
  }
  @media screen and (max-width:700px){
    .container{
      flex-direction: column;
    }
  }
  .img{
    width:100%
  }
  </style>
  