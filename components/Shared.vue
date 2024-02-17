<template>
    <div class="shared-buttons">
        <a :href="slugShared.x()">
            <LazyIconsX />
        </a>
        <a :href="slugShared.facebook()">
            <LazyIconsFacebook />
        </a>
        <a :href="slugShared.linkedin()">
            <LazyIconsLinkedin />
        </a>
        <a :href="slugShared.pocket()">
            <LazyIconsPocket />
        </a>
    </div>
</template>

<script setup>
const { slug, description } = defineProps(['slug', 'description']);
const slugShared = new useShareMedia(slug, description);
</script>