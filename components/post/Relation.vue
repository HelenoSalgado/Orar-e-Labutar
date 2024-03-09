<template>
    <div class="post-card-related">
        <NuxtLink :href="'/posts/'+slug">
          <NuxtImg class="post-card-related-img" :src="imgUrl" :alt="title" loading="lazy" width="300" height="200"/>
        </NuxtLink>
        <div class="post-card-related-text">
          <h3>{{title}}</h3>
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