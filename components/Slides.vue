<template>
    <div class="slides-container">
        <NuxtLink class="mySlides" v-for="{id, name, desktop, referer} in slidesUrl" :key="id" :href="referer">
            <NuxtImg :loading="modeLoading" :src="desktop" sizes="xs:360px md:600px lg:1200px" width="1200" height="auto" :alt="name"/>
        </NuxtLink>
    </div>
    <div class="slides-circles-container">
        <span class="slides-circle" v-for="n in slidesUrl.length" :key="n"></span>
    </div>
</template>
<script setup lang="ts">
import slidesUrl from "../assets/json/slides.json";
const { modeLoading } = defineProps(['modeLoading']);
</script>