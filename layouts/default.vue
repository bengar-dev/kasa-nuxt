<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { NavItem } from "~/components/ui/header/header-types";

const navigation: Ref<NavItem[]> = ref([
  {
    target: "/",
    name: "Accueil",
  },
  {
    target: "/about",
    name: "A Propos",
  },
]);
</script>

<template>
  <div>
    <Header :nav="navigation" />
    <slot />
    <Footer />
  </div>
</template>
