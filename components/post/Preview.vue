<template>
  <div class="post-card">
    <div class="post-card-box-image">
      <NuxtLink :href="'/posts/'+slug">
         <NuxtImg :src="imgUrl" :alt="title"/>
      </NuxtLink>
    </div>
      <div class="post-card-text">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <a :href="'/posts/'+slug">Ler Artigo</a>
      </div>
  </div>
</template>
<script setup lang="ts">
const { title, description, slug, imgUrl } = defineProps([
  'title',
  'description',  
  'slug', 
  'imgUrl'
]);
</script>