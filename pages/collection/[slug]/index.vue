<template>
  <main>
      <h1>Coleção: {{ dataCollection.attributes.title }}</h1>
      <p>Por: {{ dataCollection.attributes.author }}</p>
          <div class="grid-container">
              <PostPreview v-for="post in posts" :key="post.id"
                :title="post.attributes?.title"
                :description="post.attributes?.description"
                :slug="post.attributes?.slug"
                :imgUrl="post.attributes?.imgURL"
              />
      </div>
      <hr>
      <p>Compartilhe:</p>
      <Shared :slug="'/collection/'+slug" :description="'Veja uma coleção de artigos de '+dataCollection.attributes.author "/>
  </main>
  <section>
      <Tags />
  </section>
</template>
<style scoped>
.grid-container {
  margin: 3rem 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 2.5rem;
}
</style>
<script setup lang="ts">
import type { TCollection } from '~/types';
const collections = ref<TCollection[]>();

const slug = computed(() => useRoute().params.slug);

const { data } = await usePost.getCollectionPosts(slug.value.toString());
collections.value = data;

const dataCollection = data[0];
const posts = data[0].attributes.posts.data;

useSeoMeta({
  title: `${dataCollection.attributes.title}`,
  ogType: 'website',
  ogTitle: `${dataCollection.attributes.title}`,
  description: `Veja uma coleção de artigos de ${dataCollection.attributes.author}`,
  ogDescription: `Veja uma coleção de artigos de ${dataCollection.attributes.author}`,
  ogImage: `/img/${dataCollection.attributes.imgUrl}`,
  twitterTitle: `${dataCollection.attributes.title}`,
  twitterDescription: `Veja uma coleção de artigos de ${dataCollection.attributes.author}`,
  twitterImage: `/img/${dataCollection.attributes.imgUrl}`
}, {
  mode: 'server',
});

</script>