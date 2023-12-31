<template>
    <div>
        <h4>SEJA AVISADO QUANDO TIVER NOVOS ARTIGOS.</h4>
    </div>
    <div>
        <form action="contato.php" method="POST">
            <p><input type="text" name="nome" id="Cnome" size="30" maxlength="50" placeholder="Nome Completo" required>
            </p>
            <p><input type="email" name="email" id="Email" size="20" maxlength="50" placeholder="Digite seu e-mail"
                    required></p>
            <button class="btn" type="submit" name="submit">Inscreva-se</button>
        </form>
    </div>
</template>
<script setup lang="ts">
</script>