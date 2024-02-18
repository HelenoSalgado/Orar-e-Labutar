<template class="like-container">
    <div class="like-container">
        <span id="count-like">{{ likes || 0 }}</span>
        <IconsLike/>
    </div>
</template>
<script setup lang="ts">
/* Observei que o css importado dentro da tag script demora mais para ser aplicado
 * talvez depois que o script é carregado no final da leitura da DOM HTML, porém,
 * como o objetivo é gerar página estática, o css será carregado normalmente, sem atraso.
*/
//import '../assets/css/like.css';
const {likes} = defineProps(['likes']);
</script>