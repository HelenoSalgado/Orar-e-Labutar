<template>
   <header id="header">
        <a href="/">
             <NuxtImg src="/img/licoes1-p.webp" alt="logo"/>
             <h1>Orar e Labutar</h1>
        </a>
        <div>
          <div class="menu-dark-mode">
            <IconsDark class="dark"></IconsDark>
            <IconsLight class="light"></IconsLight>
          </div>
          <div class="hamburguer">
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
          </div>
          </div>
    </header>
    <aside class="aside-menu">
        <nav>
            <NuxtLink to="/"><IconsHome/>Home</NuxtLink>
            <NuxtLink to="/sobre"><IconsGlobe/>Sobre</NuxtLink>
            <NuxtLink to="/posts"><IconsEdit2/>Artigos</NuxtLink>
            <NuxtLink to="/podcast"><IconsMusic/>Podcast</NuxtLink>
            <NuxtLink to="/pdfs"><IconsBook/>PDFs</NuxtLink>
            <NuxtLink to="/links-uteis"><IconsLink/>Links Úteis</NuxtLink>
        </nav>
        <hr>
        <SocialMedia />  
    </aside>
</template>