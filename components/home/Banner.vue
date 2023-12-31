<template>
   <div>
      <img src="/img/liberdade-g.webp" alt="">
      <h2>Senhor, que queres que eu faça?</h2>
   </div>
</template>
<style scoped>
div{
    position: relative;
    max-height: 300px;
    overflow: hidden;
    margin-bottom: 3rem;
    text-align: center;
}
/* div, img{
  border-radius: 7px;  
} */
img{
    width: 100%;
}
h2{
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    margin: 0;
    padding: .7rem;
    border-radius: 7px;
    background-image: linear-gradient(to right, #f0cb8080, #14090070);
}
</style>