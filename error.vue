<script setup lang="ts">
const { error } = defineProps({
    error: Object,
});
const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <Header></Header>
    <div class="error">
        <h1>Error {{ error?.status }}</h1>
        <p>{{ error?.message }}</p> 
        <button @click="handleError">Home</button> 
    </div>
    <Footer class="footer"></Footer>
</template>
<style scoped>
.error{
  position: absolute;
  max-width: 1000px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.footer{
    position: absolute;
    bottom: 0;
}
button{
    font-size: 1rem;
    padding: .2rem 1rem;
    cursor: pointer;
}
</style>