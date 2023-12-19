import {defineStore} from 'pinia'
export const useStore=defineStore('store',{
state:()=>({
     photos:[
        { id:0,img:"header1.jpg",name:"headers1"},
        {id:1,img: "header2.jpg",name:"headers2"},
         {id:2,img:"header3.jpeg",name:"headers3"},
         {id:3,img:"header4.jpg",name:"headers4"},
        {id:4,img: "header5.jpg",name:"headers5"},
        {id:5,img: "laptop1.jpeg",name:"laptop1"},
        {id:6,img: "laptop2.jpg",name:"laptop2"},
         {id:8,img:"laptop3.jpg",name:"laptop3"},
        { id:9,img:"laptop4.jpg",name:"laptop4"},
        {id:10,img: "phone1.jpeg",name:"phone1"},
        {id:11,img: "phone2.jpeg",name:"phone2"},
        {id:12,img: "phone4.jpg",name:"phone3"},
         {id:13,img:"phone5.jpg",name:"phone4"},
         {id:14,img:"phone6.jpg",name:"phone5"},
     ]
})
})