<template>
  <div>
    <p>Current language: {{ $i18n.localeProperties.name }}</p>
    <ul class="languages-list" :class="!showLangs ? 'hidden' : undefined">
      <li v-for="locale in $i18n.locales" :key="locale.code">
        <NuxtLink
          @click.native="showLangs = false"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
let showLangs = ref(false)
</script>
