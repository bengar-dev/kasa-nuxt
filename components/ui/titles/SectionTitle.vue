<script setup lang="ts">
import "./section-title.css";

interface SectionTitleProps {
  title: string;
  location: string;
  tags: string[];
}

const { title, location, tags } = defineProps<SectionTitleProps>();
</script>

<template>
  <div class="section-title">
    <h3>
      {{ title }}
    </h3>
    <p>{{ location }}</p>
    <div class="section-tags">
      <LocationTag v-for="item of tags" :tag="item" />
    </div>
  </div>
</template>
