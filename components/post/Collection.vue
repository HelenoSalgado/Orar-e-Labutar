<template>
    <div class="post-card-colection">
      <NuxtLink :href="'/collection/'+slug">
        <NuxtImg :src="imgUrl" :alt="title" loading="lazy" width="300" height="300"/>
        <div class="post-card-colection-text">
        <div>
          <h3>{{ title }}</h3>
          <p>{{ author }}</p>
        </div>
        <span>{{count}} posts</span>
      </div> 
      </NuxtLink>
    </div>
</template>
<script setup lang="ts">
const { title, imgUrl, author, slug, count } = defineProps(['title', 'imgUrl', 'slug', 'author', 'count']);
</script>