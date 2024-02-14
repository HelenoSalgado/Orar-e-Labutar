<template>
    <main>
        <h1>Artigos</h1>
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
        <Shared slug="/posts" description="Veja todos os artigos do blog Orar e Labutar" />
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
import type { TPostPreview } from '~/types';
const posts = ref<TPostPreview[]>();

const { data } = await usePost.previews();
posts.value = data;
</script>