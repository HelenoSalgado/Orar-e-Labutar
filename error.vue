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
const handleError = () => clearError({ redirect: "/" });

useHead({
  style: [
    {
      innerHTML: `.page-error {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      max-width: 1000px;
      height: 100vh;
      text-align: center;
    }
    .page-error button {
    max-width: 200px;
    font-size: 1rem;
    padding: .2rem 1rem;
    cursor: pointer;
    }`,
    },
  ],
});
</script>
