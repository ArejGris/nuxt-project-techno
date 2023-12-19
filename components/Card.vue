<template>
    <div class="card card1 bg-gradient-to-t from-cyan-300" >
      
        <img :src="`imgs/${img}`" alt="">
        <div class="details">
            <h1 class="font-bold p-2">title: {{ name }}</h1>
            <div>price: $15</div>
            <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam et inventore tempora beatae cupiditate quia eaque facere nam molestias maxime.
                Unde aperiam nihil non exercitationem facere veniam culpa maiores dicta.

            </p>
            

         
        <button class="btn" ><NuxtLink :to="`/products/${id}`">View Details</NuxtLink></button>

        </div>

    </div>

</template>
<script setup>
import { defineEmits } from 'vue';
const emit=defineEmits(['sendme'])
const {img,id,name}=defineProps(['img','id','name'])
const send=()=>{
emit('sendme')
}
</script>
<style>
.card1{
    height: 100%;
    width: 100%;
    box-shadow:1px 2px 5px rgba(0,0,0,.33);
    padding: 20px;
    background-color: white;
}
.card img{
    position: relative;
    left:50%;
    transform: translateX(-50%);
    height: 50%;

}
.details{
    position: relative;
    height: 50%;
    display: flex;
    flex-direction: column;
}
p{
    overflow: hidden;
   text-overflow: ellipsis;
   height: 50%;
   padding-bottom: 10px;
}
</style>