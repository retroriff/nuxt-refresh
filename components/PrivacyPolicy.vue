<template>
  <section class="privacy">
    <h1>Content</h1>
    <ContentRenderer v-if="data" :value="data" />
    <Loading v-else />
  </section>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('component', () => {
  return queryContent('/privacy-policy').findOne()
})
</script>
