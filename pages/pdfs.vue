<template>
    <main>
        <h2>PDFs e E-books</h2>
            <h3>Agostinho de Hipona (<a href="https://drive.google.com/folderview?id=1riMGLVDy9NyPwfdea9bWDPRrQ9AdvwaR">aqui</a>)</h3>


            <p><a href="https://drive.google.com/file/d/15VdZoMXDmzcN03ICJg4xjE4pYP7foJiB/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>Graça e Livre-Arbítrio</em></a></p>
        
        
            <p><a href="https://drive.google.com/file/d/16M80TTiR3OHRUHj5xyZ1-n4K9a07Xj0l/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>A Predestinação dos Santos</em></a></p>
        
        
            <p><a href="https://drive.google.com/file/d/15D9BzWKZ4ZnCEVMTqdnT_9PckZSwNzMO/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>Confissões</em></a></p>
        
        
            <h3>Bernardo de Claraval (<a href="https://drive.google.com/folderview?id=1cfhxAqPN7zm8lnJw6Mfpcn-QJSp1ryG4">aqui</a>)</h3>
        
        
            <p><a href="https://drive.google.com/file/d/1j_352GvXLomjmLsBiEKmzqIUsc1wo-Ft/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>Um Tratado sobre o Amor de Deus</em></a></p>
        
        
            <h3>João Calvino (<a href="https://drive.google.com/folderview?id=1sLtN8Pe7nWl5pywP8tNBB7V7EzwfCr9L">aqui</a>)</h3>
        
        
            <p><a href="https://drive.google.com/file/d/1bIZ1UO-y8zjk8iZos3Tcrf1whYE_r1rq/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>O Mistério da Piedade</em></a></p>
        
        
            <p><a href="https://drive.google.com/file/d/1IaBp_6w7U7dwaqMEZxWtnxMTl2Qg2vPR/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>A Palavra de Deus, nossa Única Regra</em></a></p>
        
        
            <p><a href="https://drive.google.com/file/d/1kloRYTpXTes2EN-nJGHo9I8orn53Bu_m/view?usp=sharing" target="_blank" rel="noreferrer noopener"><em>A pura Pregação da Palavra de Deus</em></a></p>
        
        
            <p><a rel="noreferrer noopener" href="https://drive.google.com/file/d/1X_G1emQUXN9tiGgJsuzcKWM8lin71PDp/view?usp=sharing" target="_blank"><em>Eleição</em></a></p>
        
        
            <h3>George Whitefield (<a href="https://drive.google.com/folderview?id=1_n6o2fZLwYBaltO3Phm9Oo_IzKm1YfbL">aqui</a>)</h3>
        
        
            <p><a rel="noreferrer noopener" href="https://drive.google.com/file/d/1DNK-Wec8DEbVO9l_2FL6RXTm4zX7I6wz/view?usp=sharing" target="_blank">
            <em>A Regeneração</em></a></p>
        
        
            <p><a href="https://drive.google.com/file/d/1nnTsZxFJaxeeJMVYe1X9Y8EdSx1u3i5s/view?usp=drivesdk" target="_blank" rel="noreferrer noopener"><em>Marcas de Uma Verdadeira Conversão</em></a></p>
            <hr>
            <p>Compartilhe:</p>
            <Shared
              slug="/pdfs"
              description="Conheça essa coleção de pdfs sobre teologia e fé cristã."
            />
        </main>
</template>
<script setup lang="ts">
import config from '~/config';

useSeoMeta({
    title: 'PDFs e Ebooks',
    description: 'PDFs e ebooks recomendadados para se aprofundar no estudo do cristianismo e teologia.',
    ogDescription: 'PDFs e ebooks recomendadados para se aprofundar no estudo do cristianismo e teologia.',
    ogImage: `${config.baseURL}/img/pdfs-e-ebooks.jpg`,
    twitterDescription: 'PDFs e ebooks recomendadados para se aprofundar no estudo do cristianismo e teologia.',
    twitterImage: `${config.baseURL}/img/pdfs-e-ebooks.jpg`,
}, {
    mode: 'server'
});
definePageMeta({
   title: 'PDFs'
})
</script>
<style scoped>
h3, p{
    text-align: left;
}
p{
    font-size: 1rem;
}
a{
    text-decoration: none;
}
</style>