<template>
  <div id="app">
    <div id="top"></div>

    <HomeView />
    <ProjectsView />
    <div id="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { browserKeyEvent, browserScrollEvent, isMobile, mobileScrollEvent } from './utils'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'

if (isMobile()) {
  mobileScrollEvent()
} else {
  window.addEventListener('keydown', browserKeyEvent)
  window.addEventListener('wheel', browserScrollEvent, { passive: false })
}
</script>

<style scoped></style>
