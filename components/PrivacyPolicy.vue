<template>
  <section class="privacy">
    <h1>Content</h1>
    <ContentRenderer v-if="data" :value="data" />
    <Loading v-else />
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data } = await useAsyncData(locale.value, () => {
  return queryContent(locale.value + '/privacy-policy').findOne()
})
</script>
