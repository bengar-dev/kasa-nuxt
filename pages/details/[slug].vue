<script setup lang="ts">
import { DataProps } from "~/types/datas";
import { useMainStore } from "~/store";
const { params } = useRoute();

const store = useMainStore();
if (Object.keys(store.data).length === 0) {
  await useAsyncData("locations", async () => {
    const response: DataProps[] = await $fetch(
      "http://localhost:3000/datas.json"
    );
    store.storeDataFromApi(response);
    return response;
  });
}
const data = store.filterDataWithId(params.slug as string);

console.log(data?.equipments);
</script>

<template>
  <div>
    <SliderImages v-if="data?.pictures" :pictures="data?.pictures" />
    <BlockDetailsContent v-if="data?.title">
      <HeaderDetails :data="data" />
      <div class="main-content">
        <ToggleContent title="Description" :text="data.description" />
        <ToggleContent title="Equipments" :text="data.equipments" />
      </div>
    </BlockDetailsContent>
  </div>
</template>

<style>
.main-content {
  display: flex;
  gap: 70px;
}
</style>
