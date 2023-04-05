<script setup lang="ts">
import "./toggle-content.css";

interface ToggleContentProps {
  title: string;
  text: string | string[];
}

const { title, text } = defineProps<ToggleContentProps>();
</script>

<template>
  <article class="toggle-content">
    <div class="toggle-title">
      <h3>{{ title }}</h3>
    </div>
    <p v-if="typeof text === 'string'" class="toggle-text">{{ text }}</p>
    <ul v-else-if="Array.isArray(text) && text.length > 0" class="toggle-text">
      <li v-for="item in text" :key="item">{{ item }}</li>
    </ul>
    <span v-else> error </span>
  </article>
</template>
