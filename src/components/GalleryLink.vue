<template>
  <div class="button">
    <RouterLink class="text-black" to="/${props.link}"
      >Go to {{ props.linkName }}</RouterLink
    >
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  linkName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
