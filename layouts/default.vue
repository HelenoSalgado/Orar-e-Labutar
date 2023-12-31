<template>
    <Header></Header>
    <div>
       <slot></slot> 
    </div>
    <Footer></Footer>
</template>
<style scoped>
div{
    max-width: 800px;
    min-height: 100vh;
    margin: 4rem auto;
}
</style>