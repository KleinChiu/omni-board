<template>
  <span class="score-card">
    {{ score }}
  </span>
</template>

<script setup lang="ts">
defineProps<{ score: number }>();
</script>

<style scoped>
.score-card {
  display: inline-block;
  min-width: 200px;
  min-height: 200px;
  text-align: center;
}
</style>
