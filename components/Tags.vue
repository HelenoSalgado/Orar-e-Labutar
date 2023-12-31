<template>
    <div class="tags" v-for="tag in data" :key="tag.id">
        <a :href="'/tags/'+tag.attributes.name">#{{tag.attributes.name}}</a> 
    </div>
</template>
<script setup lang="ts">
import type { TCategory } from '~/types';
const tags = ref<TCategory[]>();

const { data } = await usePost.getTags();
tags.value = data;
</script>