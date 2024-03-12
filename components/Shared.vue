<template>
    <div class="shared-buttons">
        <a class="title-icon-flex" :href="slugShared.x()">
            <LazyIconsX />
            <span>X/Twitter</span>
        </a>
        <a class="title-icon-flex" :href="slugShared.facebook()">
            <LazyIconsFacebook />
            <span>Facebook</span>
        </a>
        <a class="title-icon-flex" :href="slugShared.linkedin()">
            <LazyIconsLinkedin />
            <span>Linkedin</span>
        </a>
        <a class="title-icon-flex" :href="slugShared.pocket()">
            <LazyIconsPocket />
            <span>Pocket</span>
        </a>
        <a class="title-icon-flex" :href="slugShared.whatsapp()">
            <LazyIconsWhatsApp />
            <span>WhatsApp</span>
        </a>
    </div>
</template>

<script setup>
const { slug, description } = defineProps(['slug', 'description']);
const slugShared = new useShareMedia(slug, description);
</script>