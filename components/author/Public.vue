<template>
    <div class="article-author">
        <NuxtImg :src="avatarUrl" :alt="name" width="60" height="60"/>
        <div>
            <NuxtLink :to="'/authors/'+slug">{{ name }}</NuxtLink>
            <span class="article-author-date" v-html="transformDate(date)"></span>
        </div>   
    </div>
</template>
<script setup lang="ts">
const { avatarUrl, name, date, slug } = defineProps(['avatarUrl', 'name', 'date', 'slug']);
</script>