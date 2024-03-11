<template>
    <Slides/>
    <main>
        <h1 class="title-icon-flex">
            <IconsBookOpen/>
            <span>Posts Recentes</span>
        </h1>
            <div class="grid-container">
                <PostPreview v-for="post in posts" :key="post.id"
                  :title="post.attributes?.title"
                  :description="post.attributes?.description"
                  :slug="post.attributes?.slug"
                  :imgUrl="post.attributes?.imgURL"
                />
            </div>
      <section>
        <h2 class="title-icon-flex">
          <IconsBookMark />
          <span>Coleções</span>
        </h2>
           <div class="grid-container">
                <PostCollection v-for="collection in dataColection" :key="collection.id"
                :title="collection.attributes.title"
                :imgUrl="collection.attributes.imgUrl"
                :author="collection.attributes.author"
                :slug="collection.attributes.slug"
                :count="collection.attributes.posts?.data.length"
                />
          </div>
      </section>
    </main>
</template>
<script setup lang="ts">
import type { TCollection, TPostPreview } from '~/types';
import config from '~/config';
const posts = ref<TPostPreview[]>();
const collection = ref<TCollection[]>();

const { data: dataPosts } = await usePost.previews();
posts.value = dataPosts;

const { data: dataColection } = await usePost.getCollection();
collection.value = dataColection;

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
});
useHead({
  script: [
    {
      defer: 'true',
      src: '/js/slides.js'
    }
  ]
});
</script>