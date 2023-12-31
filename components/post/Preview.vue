<template>
  <div class="post-card">
    <div class="box-image">
      <img :src="imgUrl" :alt="title"/>
    </div>
    <a :href="'/posts/'+slug">
      <div class="text-artigo">
        <h2>{{title}}</h2>
      </div>
    </a>
  </div>
</template>

<script setup>
const { title, slug, imgUrl } = defineProps([
  'title',  
  'slug', 
  'imgUrl'
]);
</script>

<style scoped>
.post-card{
  flex: 1 2 300px;
  height: 270px;
  border-radius: 7px;
  overflow: hidden;
  box-shadow: 1px 5px 5px #0000005e;
  background-color: var(--color-background);
}
.text-artigo{
  width: 90%;
  margin: auto;
  background-color: var(--color-background);
}
.text-artigo h2{
  color: #fff;
  font-size: 1.1rem;
}
.box-image{
  overflow: hidden;
}
img{
  display: block;
  margin: 0;
  width: 100%;
  height: 200px;
  object-fit: cover;
}
a{
   text-decoration: none;
}
</style>