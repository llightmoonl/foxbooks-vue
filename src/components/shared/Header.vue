<script setup lang="ts">
import { RouterLink } from "vue-router";
import Button from "../ui/Button.vue";
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
              <Button variant="outline">
                Меню
              </Button>
            </div>

            <nav class="menu">
              <ul class="menu__list">
                <li class="menu__element">
                  <Button variant="outline">
                    <Heart/>
                  </Button>
                </li>
                <li class="menu__element">
                  <Button variant="outline">
                    <Cart/>
                  </Button>
                </li>
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
