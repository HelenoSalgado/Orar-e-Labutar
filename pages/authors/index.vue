<template>
    <main>
        <h1>Autores</h1>
        <div class="container-authors">
            <AuthorPreview />
        </div>
        <Tags />
    </main>
</template>
<style scoped>
.container-authors {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
}
</style>