<script setup lang="ts">
import { RouterLink } from "vue-router";
import Container from "./Container.vue";
</script>

<template>
    <header class="header">
        <Container>
            <RouterLink class to="/">
                <img src="" alt="Foxbooks Logo" />
            </RouterLink>
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__element">Like</li>
                    <li class="menu__element">Cart</li>
                    <li class="menu__element">0 Р</li>
                    <li class="menu__element">Войти</li>
                </ul>
            </nav>
        </Container>
    </header>
</template>

<style scoped lang="sass"></style>
