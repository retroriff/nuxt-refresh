<template>
  <div>
    <button @click="toggle()">Toggle</button>
    <PrivacyPolicy v-if="showComponent" />
  </div>
</template>

<script setup>
const showComponent = ref(false)

const toggle = () => {
  showComponent.value = !showComponent.value
}
</script>
