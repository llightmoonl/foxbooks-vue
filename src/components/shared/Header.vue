<script setup lang="ts">
import { RouterLink } from "vue-router";
import Container from "./Container.vue";

import {Heart} from "lucide-vue-next";
</script>

<template>
    <header class="header">
        <Container>
          <div class="header__content">
            <div class="header__left">
              <RouterLink class to="/">
                <img src="#" alt="Foxbooks Logo" />
              </RouterLink>

            </div>

            <nav class="menu">
              <ul class="menu__list">
                <li class="menu__element"><Heart /></li>
                <li class="menu__element">Cart</li>
                <li class="menu__element">0 Р</li>
                <li class="menu__element">Войти</li>
              </ul>
            </nav>
          </div>
        </Container>
    </header>
</template>

<style scoped lang="scss">
.header {
  &__content {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }
}
.menu{
  &__list{
    display: flex;
    list-style-type: none;
  }
}
</style>
