<template>
  <h2 @click="changeBoardTitle">
    {{ boardTitle.toUpperCase() }}
  </h2>

  <router-view />

  <router-link to="/boards/mono"> Mono </router-link>
  <router-link to="/boards/duo"> Duo </router-link>
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
