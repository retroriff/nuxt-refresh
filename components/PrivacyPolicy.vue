<template>
  <section class="privacy">
    <ContentRenderer v-if="data" :value="data" />
    <Loading v-else />
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

const { data, refresh } = await useAsyncData('privacy-policy', () => {
  return queryContent(locale.value + '/privacy-policy').findOne()
})

watch(
  () => locale.value,
  () => refresh()
)
</script>
