// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head :{
         title:'Nuxt Project',
         meta:[
         { name:'nuxt',content:'every thing about nuxt'}
         ],
         link:[
          {
            rel:'stylesheet' ,href:'https://fonts.googleapis.com/icon?family=Material+Icons',
      
          },
          {
            rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" 
          }
         ]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-swiper', 'nuxt-mdi','@pinia/nuxt'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  mdi: {
    cache: false,
    componentName: 'MdiIcon',
    defaultSize: '1em'
  }
})
