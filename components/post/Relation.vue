<template>
    <div class="post-card">
        <NuxtLink :href="'/posts/'+slug">
          <NuxtImg class="post-card-image" :src="imgUrl" :alt="title" loading="lazy" width="300" height="200"/>
        </NuxtLink>
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