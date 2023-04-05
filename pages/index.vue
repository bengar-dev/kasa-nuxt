<script setup lang="ts">
import { useMainStore } from "~/store";
import { DataProps } from "~/types/datas";

const store = useMainStore();

await useAsyncData("locations", async () => {
  const response: DataProps[] = await $fetch(
    "http://localhost:3000/datas.json"
  );
  store.storeDataFromApi(response);
  return response;
});
</script>

<template>
  <Banner title="Chez vous, partout et ailleurs" />
  <BlockContent
    ><div v-for="item of store.data">
      <RentCard :data="item" /></div
  ></BlockContent>
</template>
