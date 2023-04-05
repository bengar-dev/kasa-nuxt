<script setup lang="ts">
import "./slider-images.css";
import type { Picture } from "~/types/datas";

type Props = {
  pictures: Picture[];
};

const { pictures } = defineProps<Props>();
const currentPic = useState("currentPic", () => 2);

const nextPic = () => {
  if (currentPic.value < pictures.length - 1) {
    currentPic.value++;
  } else {
    currentPic.value = 0;
  }
};

const previousPic = () => {
  if (currentPic.value > 0) {
    currentPic.value--;
  } else {
    currentPic.value = pictures.length - 1;
  }
};
</script>

<template>
  <div class="caroussel">
    <button @click="previousPic">Previous</button>
    <button @click="nextPic">Next</button>
    <img :src="pictures[currentPic]" alt="image" />
    <span class="caroussel-info"
      >{{ currentPic + 1 }} / {{ pictures.length }}</span
    >
  </div>
</template>
