<template>
    <main>
            <h2>Podcast</h2>
            <section>
                <h3>Sobre a Centralidade do Coração</h3>
                <iframe class="podcast" src="https://open.spotify.com/embed/episode/2pI8i3YP5wE5aQbOkFoB1Q?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/2PN7mo7BPdNbOD4vFDYJR4?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/5Dk08Yh4UDhbs7HCb4sXBf?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://open.spotify.com/embed/episode/2r2aMfdlcxvaqJWwRPyKKY?theme=0" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </section>
            <hr>
            <p>Compartilhe:</p>
            <Shared 
              slug="/podcast"
              description="Ouça uma série de podcast sobre a centralidade do coração."
            />
        </main>
</template>
<script setup lang="ts">
import config from '~/config';

useSeoMeta({
    title: 'Podcast',
    description: 'Podcasts recomendadados para se aprofundar no estudo do cristianismo e teologia.',
    ogDescription: 'Podcasts recomendadados para se aprofundar no estudo do cristianismo e teologia.',
    ogImage: `${config.baseURL}/img/podcast.jpg`,
    twitterDescription: 'Podcasts recomendadados para se aprofundar no estudo do cristianismo e teologia.',
    twitterImage: `${config.baseURL}/img/podcast.jpg`,
}, {
  mode: 'server'
});
definePageMeta({
  title: 'Podcast'
})
</script>
<style scoped>
section, iframe{
  margin: 1rem 0;
}
</style>