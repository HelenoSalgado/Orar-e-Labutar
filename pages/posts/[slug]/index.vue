<template>
  <main>
    <AuthorPublic :name="profile?.attributes.name" :avatar-url="profile?.attributes.avatarUrl" :date="post?.attributes.updatedAt" :slug="profile?.attributes.slug" />
    <Post :title="post?.attributes.title" :content="post?.attributes.content" />
    <hr>
    <Like/>
    <p>Compartilhe:</p>
    <Shared 
      :slug="'posts/'+post?.attributes.slug" 
      :description="post?.attributes.description" 
    />
  </main>
  <section>
    <div class="navigator-posts">
      <NuxtLink 
        v-if="post?.attributes.navigatorSlug?.before" 
        :to="post?.attributes.navigatorSlug?.before">
        &lang; Post Anterior
      </NuxtLink>
      <NuxtLink 
        v-if="post?.attributes.navigatorSlug?.next" 
        :to="post?.attributes.navigatorSlug?.next">
          Próximo Post &rang;
      </NuxtLink>
    </div>
  </section>
  <section class="posts-relation">
      <h2 class="title-icon-flex">
        <IconsBookOpen/> 
        <span>Posts Relacionados</span>
      </h2>
      <div v-for="postRelated in postsRelated" :key="postRelated.id">
        <PostRelation v-if="postRelated?.id != post?.id"
         :title="postRelated.attributes.title"
         :img-url="postRelated.attributes.imgURL"
         :slug="postRelated.attributes.slug"
        />
      </div>
    </section>
  <section>
      <Tags />
  </section>
  <section>
    <Slides />
  </section>
</template>
<script setup lang="ts">
import type { TPost, TProfile } from '~/types';
const slug = computed(() => useRoute().params.slug);
const profile = ref<TProfile>();
const post = ref<TPost>();
const postsRelated = ref<TPost[]>();

const { data } = await usePost.get(slug.value.toString());

post.value = Object.values(data).at(0);

const title = `Orar e Labutar | ${post.value?.attributes.title}`;

profile.value = Object(post.value?.attributes.profile).data;
postsRelated.value = Object(profile.value?.attributes.posts).data;

useSeoMeta({
  title: `${title}`,
  ogType: 'article',
  ogTitle: `${title}`,
  description: `${post.value?.attributes.description}`,
  ogDescription: `${post.value?.attributes.description}`,
  ogImage: `${post.value?.attributes.imgURL}`,
  twitterTitle: `${title}`,
  twitterDescription: `${post.value?.attributes.description}`,
  twitterImage: `${post.value?.attributes.imgURL}`
}, {
  mode: 'server',
});
useHead({
  script: [
    {
      defer: 'true',
      src: '/js/amei.js'
    },
    {
      defer: 'true',
      src: '/js/slides.js'
    }
  ]
});
</script>