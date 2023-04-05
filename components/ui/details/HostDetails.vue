<script setup lang="ts">
import "./host-details.css";
import { Host } from "~/types/datas";

interface HostDetailsProps {
  host: Host;
  rating: string;
}

const { host, rating } = defineProps<HostDetailsProps>();

const handleRatingStars = (rating: string): number => {
  const ratingNumber = Number(rating);
  return 5 - ratingNumber;
};
</script>

<template>
  <div class="host-details">
    <div class="host-user">
      <span>{{ host.name }}</span>
      <img :src="host.picture" alt="host avatar" />
    </div>
    <div class="host-rating">
      <span v-for="index in Number(rating)">
        <img src="~/assets/star_red.svg" alt="Star red" />
      </span>
      <span
        v-if="handleRatingStars(rating) > 0"
        v-for="index in handleRatingStars(rating)"
      >
        <img src="~/assets/star_white.svg" alt="Star grey" />
      </span>
    </div>
  </div>
</template>
