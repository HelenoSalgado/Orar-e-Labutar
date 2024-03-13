<template>
<h3 class="title-icon-flex"><IconsTag /> Tags</h3> 
<div class="tags">
   <a
    v-for="tag in data" :key="tag.id" 
    :href="'/tags/'+tag.attributes.name">
    #{{tag.attributes.name}}
   </a> 
</div>
</template>
<script setup lang="ts">
import type { TCategory } from '~/types';
const tags = ref<TCategory[]>();

const { data } = await usePost.getTags();
tags.value = data;
</script>