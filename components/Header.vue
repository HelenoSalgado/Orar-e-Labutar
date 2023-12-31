<template>
   <header id="header">
        <a href="/">
           <img src="/img/licoes1.jpg" alt="">
        </a>
        <h1>Orar e Labutar</h1>
        <div 
        class="hamburguer" 
        :class="{ 'show-menu': visibleMenu }"
        @click="visibleMenu = !visibleMenu">
          <div id="line1"></div>
          <div id="line2"></div>
          <div id="line3"></div>
        </div>
    </header>
    <aside :class="{ 'sidebar-visible': visibleMenu }">
        <nav>
            <NuxtLink to="/"><IconsHome/>Home</NuxtLink>
            <NuxtLink to="/sobre"><IconsGlobe/>Sobre</NuxtLink>
            <NuxtLink to="/posts"><IconsEdit2/>Artigos</NuxtLink>
            <NuxtLink to="/podcast"><IconsMusic/>Podcast</NuxtLink>
            <NuxtLink to="/pdfs"><IconsBook/>PDFs</NuxtLink>
            <NuxtLink to="/links-uteis"><IconsLink/>Links Úteis</NuxtLink>
        </nav>
        <div>
            <SocialMedia />  
        </div>
        <hr>
        <div class="menu-dark-mode">
          <IconsDark @click="colorMode.preference = 'dark'"></IconsDark>
          <IconsLight @click="colorMode.preference = 'light'"></IconsLight>
          <IconsSystem @click="colorMode.preference = 'system'"></IconsSystem>
        </div>
    </aside>
</template>
<script setup lang="ts">
const visibleMenu = ref(false);
const colorMode = ref(useColorMode());
</script>