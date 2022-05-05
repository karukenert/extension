<template>
  <div>
    <p>{{ displayName }}ass</p>
    <p>{{ email }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const email = ref('Karukenert@gmail.com');
const displayName = ref('Kenert Karu');
</script>

