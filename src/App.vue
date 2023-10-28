<template>
  <div id="app">
    <div class="pulse-animation">
      {{
        state.page === 0
          ? `${state.isMobile ? 'Swipe' : 'Scroll'} down for projects`
          : `${state.isMobile ? 'Swipe' : 'Scroll'} up for profile`
      }}
    </div>
    <div id="top"></div>

    <HomeView />
    <ProjectsView />
    <div id="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { desktopScrollEvent, mobileScrollEvent } from './utils'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'

import { state } from './state'

if (state.isMobile) {
  mobileScrollEvent()
} else {
  desktopScrollEvent()
}
</script>

<style scoped></style>
