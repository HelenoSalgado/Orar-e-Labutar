<template>
    <div class="article-author">
        <img :src="imgUrl" :alt="name">
        <div>
            <NuxtLink :to="'/authors/'+slug">{{ name }}</NuxtLink>
            <span class="article-author-date" v-html="transformDate(date)"></span>
        </div>
        
    </div>
</template>
<script setup lang="ts">
const { imgUrl, name, date, slug } = defineProps(['imgUrl', 'name', 'date', 'slug']);
</script>