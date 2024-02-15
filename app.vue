<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
</style>
<script setup lang="ts">
const route = useRoute();
const { public: pub } = useRuntimeConfig();
const title = computed(() => route.meta.title ? `Orar e Labutar | ${route.meta.title}` : 'Orar e Labutar'
);

useHead({
  titleTemplate: ((titleChunk) => {
    if (titleChunk?.includes('|')) return titleChunk;
    return title.value
  })
});

useSeoMeta({
  ogTitle: `${title.value}`,
  twitterTitle: `${title.value}`,
  author: 'Heleno Salgado',
  ogLocale: 'pt-BR',
  ogUrl: `${pub.site.url + route.path}`,
  twitterCard: 'summary_large_image',
  twitterCreator: '@HelenoSalgado'
});
</script>
