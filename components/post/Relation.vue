<template>
    <div class="post-card">
      <div class="post-card-box-image">
        <a :href="'/posts/'+slug">
          <NuxtImg :src="imgUrl" :alt="title" format="webp" loading="lazy"/>
        </a>
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