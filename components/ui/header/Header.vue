<script setup lang="ts">
import { NavItem } from "./header-types";
import "./header.css";

type Props = {
  nav: NavItem[];
};

const { nav } = defineProps<Props>();
</script>

<template>
  <header>
    <div>
      <img src="~/assets/kasa_logo.svg" alt="Kasa Logo" />
    </div>
    <nav>
      <ul>
        <li v-for="item in nav" :key="item.target">
          <NuxtLink :to="item.target">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
