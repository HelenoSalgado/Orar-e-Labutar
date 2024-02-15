<template>
    <div class="slides-container">
        <a class="mySlides" v-for="{id, name, imgUrl, referer} in slidesUrl" :key="id" :href="referer">
            <NuxtImg :src="imgUrl" :alt="name"/>
        </a>
    </div>
    <div class="slides-circles-container">
        <span class="slides-circle" v-for="n in slidesUrl.length" :key="n"></span>
    </div>
</template>
<script setup lang="ts">
import slidesUrl from "../assets/json/slides.json";
import slides from '../assets/ts/slides';
onBeforeMount(() => {
    slides();
});
</script>