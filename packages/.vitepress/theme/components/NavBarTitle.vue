<script setup lang="ts">
import { withBase, useData } from 'vitepress'
const { site, theme, localePath } = useData()
</script>

<template>
  <a
    class="nav-bar-title"
    :href="localePath"
    :aria-label="`${site.title}, back to home`"
  >
    <img
      v-if="theme.logo"
      class="logo"
      :src="withBase(theme.logo)"
      alt="Logo"
    />
    {{ site.title }}
  </a>
</template>

<style scoped>
.nav-bar-title {
  color: var(--c-text);
  font-weight: 600;
  font-size: 1.3rem;
}

.nav-bar-title:hover {
  text-decoration: none;
}

.logo {
  height: 1.3rem;
  margin-right: 0.75rem;
  vertical-align: bottom;
}
</style>
