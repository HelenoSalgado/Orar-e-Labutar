<template>
<article>
   <h1>{{ title }}</h1>
   <div v-html="md.render(content)"></div> 
</article>
</template>
<script setup lang="ts">
const { title, content } = defineProps(['title', 'content']);
</script>