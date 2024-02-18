<template>
  <div class="post-card">
      <NuxtLink :href="'/posts/'+slug">
         <NuxtImg class="post-card-image" :src="imgUrl" :alt="title" width="300" height="200"/>
      </NuxtLink>
      <div class="post-card-text">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <a :href="'/posts/'+slug">
          <button>Ler Artigo</button>
        </a>
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