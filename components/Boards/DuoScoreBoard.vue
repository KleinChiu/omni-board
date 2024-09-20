<template>
  <div>
    <p @click="changeHomeLabel">
      {{ homeLabel.toUpperCase() }}
    </p>
    <score-card
      :score="homeScore"
      @click="homeScore++"
      @auxclick="homeScore--"
    />
  </div>

  <span>:</span>

  <div>
    <p @click="changeGuestLabel">
      {{ guestLabel.toUpperCase() }}
    </p>
    <score-card
      :score="guestScore"
      @click="guestScore++"
      @auxclick="guestScore--"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ScoreCard from "../ScoreCard.vue";

const homeLabel = ref("home");
const homeScore = ref(0);
const changeHomeLabel = () =>
  Promise.resolve().then(() => {
    const label = prompt("Label for home team?");
    if (label == null) {
      return;
    }
    homeLabel.value = label;
  });

const guestLabel = ref("guest");
const guestScore = ref(0);
const changeGuestLabel = () =>
  Promise.resolve().then(() => {
    const label = prompt("Label for guest team?");
    if (label == null) {
      return;
    }
    guestLabel.value = label;
  });
</script>
