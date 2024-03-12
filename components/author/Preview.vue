<template>
    <div class="card-author" v-for="auth in authors" :key="auth.id">
        <NuxtImg preset="avatar" :src="'/img/'+auth.attributes.imgUrl" :alt="auth.attributes.name" width="60" height="60"/>
        <div>
            <h3>{{ auth.attributes.name }}</h3>
            <p>Deste {{ transformDate(auth.attributes.createdAt) }}</p>
            <a :href="'/authors/'+auth.attributes.slug">Ver Perfil</a>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { TProfile } from '~/types';

const authors = ref<TProfile[]>();

const { data: authorsArray } = await useAuthors.getAll();
authors.value = Object(authorsArray);
</script>
<style scoped>
.card-author{
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
}
img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
h3, p, a{
    margin: 0;
}
p, a{
    font-size: small;
}
a{
    text-decoration: none;
    font-weight: bold;
}
</style>