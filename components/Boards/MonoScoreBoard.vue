<template>
  <score-card :score="score" @click="score++" @auxclick="score--" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import ScoreCard from "../ScoreCard.vue";

const score = ref(0);
</script>
