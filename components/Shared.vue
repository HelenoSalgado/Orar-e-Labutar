<template>
    <div class="shared-buttons-container">
        <div class="shared-buttons">
        <a :href="slugShared.x()">
                <LazyIconsX/>
            </a>
            <a :href="slugShared.facebook()">
               <LazyIconsFacebook/>     
            </a>
            <a :href="slugShared.linkedin()">
                <LazyIconsLinkedin/>     
            </a>
            <a :href="slugShared.pocket()">
                <LazyIconsPocket/>
            </a>
        </div>
        <Like :likes="likes"/>
    </div>
</template>

<script setup>
const { slug, description, likes } = defineProps(['slug', 'description', 'likes']);
const slugShared = new useShareMedia(slug, description);
</script>