<script setup lang="ts">
import "./location-tag.css";

type Props = {
  tag: string;
};

const { tag } = defineProps<Props>();
</script>

<template>
  <span class="tag-location">{{ tag }}</span>
</template>
