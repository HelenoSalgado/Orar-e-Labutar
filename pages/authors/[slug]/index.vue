<template>
    <main>
       <div class="biograpy">
        <article>
          <div class="biograpy-box-image">
            <NuxtImg 
               :src="'/img/'+profile?.attributes.imgUrl" 
               :alt="profile?.attributes.name"
               width="800px" 
               height="400px"
               sizes="xs:320px, sm:640px, md:768px"
            />
          </div>
          <h1>{{profile?.attributes.name}}</h1>
          <div v-html="md.render(profile?.attributes.biograpy as string)"></div>
        </article>
        <hr>
        <p>Compartilhe:</p>
        <Shared 
         :slug="'author/'+slug"
         :description="description"
       />
       </div>
    </main>
    <section>
      <h2 class="title-icon-flex">
        <IconsUser/>
        <span>Deste Autor</span>
      </h2>
      <div class="grid-container">
        <PostRelation v-for="post in posts" :key="post.id"
         :title="post.attributes.title"
         :img-url="post.attributes.imgURL"
         :slug="post.attributes.slug"
        />
      </div>
    </section>
    <section>
      <h1 class="title-icon-flex"> 
        <IconsUsers/>
        <span>Autores</span>
      </h1>
        <div class="container-authors">
          <AuthorPreview />
        </div>
    </section>
    <section>
      <Tags />
    </section>
</template>
<script setup lang="ts">
import config from '~/config';
import type { TPostPreview, TProfile } from '~/types';
const slug = computed(() => useRoute().params.slug);
const profile = ref<TProfile>();
const posts = ref<TPostPreview[]>();
const description = ref('');

const { data } = await useAuthors.get(slug.value.toString());
profile.value = Object(data).at(0);

posts.value = Object(profile.value?.attributes.posts).data;

const title = `Orar e Labutar | ${profile.value?.attributes.name}`; 
description.value = profile.value?.attributes.biograpy?.substring(0, 270).concat('...') as string;

useSeoMeta({
  title,
  ogTitle: `${title}`,
  description,
  ogDescription: `${description.value}`,
  ogImage: `${config.baseURL}/img/${profile.value?.attributes.imgUrl}`,
  twitterTitle: `${title}`,
  twitterDescription: `${description.value}`,
  twitterImage: `${config.baseURL}/img/${profile.value?.attributes.imgUrl}`,
}, {
  mode: 'server',
});
</script>
<style scoped>
.container-authors{
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
}
</style>