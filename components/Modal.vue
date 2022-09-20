<template>
  <div @click.self="closeModal()" id="modal-form" class="modal">
    <div
      class="modal__content"
      role="alertdialog"
      aria-labelledby="modal-title"
    >
      <slot></slot>
    </div>

    <button type="button" @click="closeModal()" class="modal__close-btn">
      <span class="hidden">Close Modal</span>
      <NsvgComponent name="Close" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  showModal?: boolean
}>()

const emit = defineEmits<{
  (e: 'showModal', value: undefined): void
}>()

const closeModal = () => {
  emit('showModal', undefined)
}
</script>
