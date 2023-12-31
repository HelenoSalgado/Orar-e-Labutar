<template>
  <main>
    <AuthorPublic :name="profile?.attributes.name" :img-url="profile?.attributes.imgUrl" :date="post?.attributes.updatedAt" :slug="profile?.attributes.slug" />
    <Post :title="post?.attributes.title" :content="post?.attributes.content" />
    <hr>
    <p>Compartilhe:</p>
    <Shared :slug="post?.attributes.slug" :description="post?.attributes.description" />
  </main>
  <section class="posts-relation">
      <h2>Deste autor</h2>
      <div>
        <PostRelation v-for="post in posts" :key="post.id"
         :title="post.attributes.title"
         :img-url="post.attributes.imgURL"
         :slug="post.attributes.slug"
        />
      </div>
    </section>
  <section>
      <h3>Tags</h3>
      <Tags />
  </section>
</template>
<script setup lang="ts">
import type { TPost, TProfile } from '~/types';
const slug = computed(() => useRoute().params.slug);
const profile = ref<TProfile>();
const post = ref<TPost>();
const posts = ref<TPost[]>();

const { data } = await usePost.get(slug.value.toString());

post.value = Object.values(data).at(0);

const title = `Orar e Labutar | ${post.value?.attributes.title}`;

profile.value = Object(post.value?.attributes.profile).data;
posts.value = Object(profile.value?.attributes.posts).data;

useSeoMeta({
  title: `${title}`,
  ogType: 'article',
  ogTitle: `${title}`,
  description: `${post.value?.attributes.description}`,
  ogDescription: `${post.value?.attributes.description}`,
  ogImage: `${post.value?.attributes.imgURL}`,
  twitterTitle: `${title}`,
  twitterDescription: `${post.value?.attributes.description}`,
  twitterImage: `${post.value?.attributes.imgURL}`,
}, {
  mode: 'server',
})
</script>