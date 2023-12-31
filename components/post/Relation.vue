<template>
    <div class="post-card">
      <div class="box-image">
        <img :src="imgUrl" :alt="title"/>
      </div>
      <a :href="'/posts/'+slug">
        <div class="text-artigo">
          <h3>{{title}}</h3>
        </div>
      </a>
    </div>
  </template>
  
  <script setup>
  const { title, slug, imgUrl } = defineProps([
    'title',  
    'slug', 
    'imgUrl'
  ]);
  </script>
  
  <style scoped>
  .post-card{
    flex: 1 2 200px;
    max-width: 400px;
    height: 160px;
    border-radius: 7px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    box-shadow: 1px 5px 5px #0000005e;
    background-color: var(--color-background);
  }
  .text-artigo{
    width: 90%;
    margin: auto;
    background-color: var(--color-background);
    height: 47px;
  }
  .text-artigo h3{
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    margin: 5px 0;
  }
  .box-image{
    overflow: hidden;
  }
  img{
    display: block;
    margin: 0;
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
  a{
     text-decoration: none;
  }
  </style>