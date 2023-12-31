<template>
    <main>
        <h1>#{{ tag?.attributes.name }}</h1>
        <div class="grid-container">
            <PostPreview v-for="post in postsInTag" :key="post.id"
             :title="post.attributes.title" 
             :slug="post.attributes.slug" 
             :imgUrl="post.attributes.imgURL" 
            />
        </div>
        <hr>
        <p>Compartilhe:</p>
        <Shared :slug="'tags/' + slug" :description="'tags'" />
    </main>
    <section>
        <h3>Tags</h3>
        <Tags />
    </section>
</template>
<script setup lang="ts">
import type { TCategory, TPostPreview } from '~/types';
import config from '~/config';
const postsInTag = ref<TPostPreview[]>();
const tag = ref<TCategory>();
const slug = computed(() => useRoute().params.slug);

tag.value = await usePost.postsInTag(slug.value.toString()).then((res: any) => res.data);
postsInTag.value = tag.value?.attributes.posts.data;

const title = `Orar e Labutar | #${tag.value?.attributes.name}`;

useSeoMeta({
    title: `${title}`,
    ogType: 'article',
    ogTitle: `${title}`,
    description: `${tag.value?.attributes.description}`,
    ogDescription: `${tag.value?.attributes.description}`,
    ogImage: `${config.baseURL}/img/orar-e-labutar.jpg`,
    twitterTitle: `${title}`,
    twitterDescription: `${tag.value?.attributes.description}`,
    twitterImage: `${config.baseURL}/img/orar-e-labutar.jpg`,
}, {
    mode: 'server',
});
</script>
<style scoped>
.grid-container {
    margin: 3rem 0 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    max-width: 1200px;
}
</style>