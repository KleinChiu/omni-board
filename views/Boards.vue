<template>
  <h2 @click="changeBoardTitle">
    {{ boardTitle.toUpperCase() }}
  </h2>

  <router-view />
</template>

<script setup lang="ts">
import { ref } from "vue";

const boardTitle = ref("score board");
const changeBoardTitle = () =>
  Promise.resolve().then(() => {
    const title = prompt("Board title?");
    if (title == null) {
      return;
    }
    boardTitle.value = title;
  });
</script>
