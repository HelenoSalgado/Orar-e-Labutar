<template>
    <div class="slides-container">
        <NuxtLink class="mySlides" v-for="{id, name, desktop, referer} in slidesUrl" :key="id" :href="referer">
            <NuxtImg :loading="modeLoading" sizes="xs:320px, sm:640px, md:768px, lg:1024px, xl:1280px" :src="desktop" width="1200" height="auto" :alt="name"/>
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