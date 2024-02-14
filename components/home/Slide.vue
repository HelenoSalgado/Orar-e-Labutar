<template>
    <div class="slides-container">
        <a class="mySlides" v-for="{id, imgUrl, referer} in slidesUrl" :key="id" :href="referer">
            <img :src="imgUrl"/>
        </a>
    </div>
    <div class="circles-container">
        <span class="circle" v-for="n in slidesUrl.length" :key="n"></span>
    </div>
</template>
<script setup lang="ts">

import slidesUrl from "../../public/json/slides.json";

onBeforeMount(() => {
    const banner = ref(document.querySelectorAll('.mySlides'));
    const dots = ref(document.querySelectorAll('.circle'));
    let iMax: number = banner.value.length;
    let iMin: number = 0;

    setInterval(() => {

        for (let i = 0; i < banner.value.length; i++) {

            banner.value[i].classList.remove('viewSlides');
            dots.value[i].classList.remove('circle-backgound');
            
        }

        dots.value[iMin].classList.add('circle-backgound');
        banner.value[iMin].classList.add('viewSlides');

        if (iMin == iMax-1) return iMin = 0;

        iMin++;

    }, 2000);
});
</script>
<style scoped>
.slides-container{
    position: relative;
    max-width: 1200px;
    aspect-ratio: 3/1;
    overflow: hidden;
    margin: 50px auto 0 auto;
}
.slides-container img{
    position: absolute;
    width: 100%;
}
.circles-container{
    margin-top: .3rem;
    display: inline-flex;
    column-gap: 1rem;
    justify-content: center;
    width: 100%;
}
.circle{
    width: 17px;
    height: 17px;
    border: 1px solid var(--color-background);
    border-radius: 50%;
    cursor: pointer;
}
.circle:hover, .circle-backgound{
    background-color: var(--color-background);
}
.mySlides{
    opacity: 0;
    transition: all 300ms;
}
.mySlides:first-child{
    opacity: 10;
}
.viewSlides{
    opacity: 10;
}
</style>