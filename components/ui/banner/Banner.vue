<script setup lang="ts">
import "./banner.css";

const { title } = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="banner">
    <img class="banner-img" src="~/assets/IMG.png" alt="Banner kasa" />
    <h1>{{ title }}</h1>
  </div>
</template>
