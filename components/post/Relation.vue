<template>
    <div class="post-card">
      <div class="post-card-box-image">
        <NuxtLink :href="'/posts/'+slug">
          <NuxtImg :src="imgUrl" :alt="title" format="webp" loading="lazy" width="300" height="200"/>
        </NuxtLink>
      </div>
        <div class="post-card-text">
          <h2>{{title}}</h2>
        </div>
    </div>
  </template>
<script setup>
const { title, slug, imgUrl } = defineProps([
  'title',
  'slug',
  'imgUrl'
]);
</script>