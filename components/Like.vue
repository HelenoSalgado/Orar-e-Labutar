<template>
    <div class="like-container">
        <span id="count-like">{{ likes || 0 }}</span>
        <IconsLike/>
    </div>
</template>
<script setup lang="ts">
import likeExec from '../assets/ts/like';
const {likes} = defineProps(['likes']);
onBeforeMount(() => likeExec());
</script>