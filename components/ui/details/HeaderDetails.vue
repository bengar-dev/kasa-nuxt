<script setup lang="ts">
import { DataProps } from "~/types/datas";
import "./header-details.css";

type Props = {
  data: DataProps;
};

const { data } = defineProps<Props>();
</script>
<template>
  <div class="header-details">
    <SectionTitle
      :title="data.title"
      :location="data.location"
      :tags="data.tags"
    />
    <HostDetails :host="data.host" :rating="data.rating" />
  </div>
</template>
