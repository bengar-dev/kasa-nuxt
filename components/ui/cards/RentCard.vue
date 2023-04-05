<script setup lang="ts">
import "./rent-card.css";
import { DataProps } from "~/types/datas";

type Props = {
  data?: DataProps;
};

const { data } = defineProps<Props>();
</script>

<template>
  <NuxtLink :to="'details/' + data?.id">
    <article class="rent-card">
      <img :src="data?.cover" alt="image" />
      <div class="filter-bg"></div>
      <h2>{{ data?.title }}</h2>
    </article>
  </NuxtLink>
</template>
