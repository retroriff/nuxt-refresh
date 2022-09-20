<template>
  <div>
    <ol>
      <li>Click "Toggle Modal"</li>
      <li>Click "Close Modal"</li>
      <li>Switch to Spanish</li>
      <li>Click "Toggle Modal" :(</li>
    </ol>

    <button @click="showModal = !showModal">Toggle Modal</button>

    <LanguageSwitcher />

    <LazyModal v-if="showModal" :showModal="showModal" @show-modal="isModal">
      <PrivacyPolicy />
    </LazyModal>
  </div>
</template>

<script setup lang="ts">
const modal = ref<string | null>()
const showModal = ref(false)

const isModal = (value: string | undefined) => {
  modal.value = value
  showModal.value = value ? true : false
}
</script>
