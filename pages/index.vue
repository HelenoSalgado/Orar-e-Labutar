<template>
    <main>
        <h1>Posts Recentes</h1>
            <div class="grid-container">
                <PostPreview v-for="post in posts" :key="post.id"
                  :title="post.attributes?.title"
                  :slug="post.attributes?.slug"
                  :imgUrl="post.attributes?.imgURL"
                />
        </div>
    </main>
    <section>
        <h3>Tags</h3>
        <Tags/>
    </section>
</template>
<script setup lang="ts">
import type { TPostPreview } from '~/types';
import config from '~/config';
const posts = ref<TPostPreview[]>();

const { data } = await usePost.previews();
posts.value = data;

useSeoMeta({
    title: 'Home',
    ogType: 'website',
    description: 'Veja os artigos mais recentes. Conheça o propósito deste blog.',
    ogDescription: 'Veja os artigos mais recentes. Conheça o propósito deste blog.',
    ogImage: `${config.baseURL}/img/licoes1-mobile.jpg`,
    twitterDescription: 'Veja os artigos mais recentes. Conheça o propósito deste blog.',
    twitterImage: `${config.baseURL}/img/licoes1-mobile.jpg`,
}, {
    mode: 'server'
});
definePageMeta({
   title: 'Home'
})
</script>