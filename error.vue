<script setup lang="ts">
const { error } = defineProps({
    error: Object,
});
const handleError = () => clearError({ redirect: '/' });
</script>
<template>
    <Header></Header>
    <div class="page-error">
        <h1>Error {{ error?.status }}</h1>
        <p>{{ error?.message }}</p> 
        <button @click="handleError">Home</button> 
    </div>
    <Footer class="page-error-footer"></Footer>
</template>