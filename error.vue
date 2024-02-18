<template>
    <Header></Header>
    <div class="page-error">
        <h1>Error {{ error?.status }}</h1>
        <p>{{ error?.message }}</p> 
        <button @click="handleError">Home</button>
    </div>
    <Footer class="page-error-footer"></Footer>
</template>
<script setup lang="ts">
//import './assets/css/error.css';
const { error } = defineProps({
    error: Object,
});
const handleError = () => clearError({ redirect: '/' });
</script>